"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import ArtCard, { ArtCardProps,  } from "./ArtCard";
import { fetchArtDetails } from "@/app/action";

let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView({
    rootMargin: '700px'
  });

  const [data, setData] = useState<ArtCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        fetchArtDetails(page)
          .then((res) => {
            setData([...data, ...res.data]);
            page++;
          })
          .catch((error) => {
            console.error('Error fetching art details:', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
              {data.map(({ title, image_id, id }: ArtCardProps) => (
                  <ArtCard key={title} title={title} image_id={image_id} id={id} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="Loading..."
              width={20}
              height={20}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
