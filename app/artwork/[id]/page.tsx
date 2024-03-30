"use client"
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect} from 'react'

interface ArtData {
  title: string;
  description: string;
  image_id: string | number;
}

function Page({ params }: { params: { id: string } }) {

  const id = parseInt(params.id)

  const [data, setData] = useState<ArtData>({
    title: '',
    description: '',
    image_id: ''}
  )

  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
      .then(response => response.json())
      .then(data => setData(data.data))
  }, [])


  return (
    <section className=" flex flex-col justify-center items-center ">
      <div className="w-10/12 flex flex-col py-12">
        <div className="w-full flex flex-col justify-between my-5">
          <h2 className="text-3xl my-5 font-semibold flex flex-col justify-end">
            {data.title}
          </h2>
          <p
            className="flex flex-col justify-end description"
          >
            {showDescription ? data.description : null }
          </p>
        </div>
        <button onClick={() => setShowDescription(!showDescription)}
          className="py-2.5 px-5 w-44 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
          Read { showDescription ? 'Less' : 'More' }
        </button>
        <div className="w-full relative">
          <img
            src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
            className="w-full object-cover"
            alt={data.title}
          />
        </div>
      </div>
    </section>
  );
}

export default Page;
