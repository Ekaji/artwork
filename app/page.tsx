import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { fetchArtDetails } from "./action";
import ArtCard, {ArtCardProps} from "@/components/ArtCard";
import LoadMore from "@/components/LoadMore";

async function Home() {
  const data = await fetchArtDetails(1)
  return (
    <main>
      <HeroSection />
      <section
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.map(({title, image_id, id} : ArtCardProps) => (
          <ArtCard key={title} title={title} image_id={image_id} id={id} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home
