/* eslint-disable @next/next/no-img-element */
import { fetchArtDetailById } from '../action'
import Image from "next/image";

async function Page({ params }: { params: { id: string } }) {

  const id = parseInt( params.id )

  const data = await fetchArtDetailById(id)

  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="w-10/12 flex flex-col pb-">
        <div className="w-full flex justify-between my-5 space-x-5">
          <h2 className='text-3xl font-semibold w-4/12 flex flex-col justify-end'>
            {data.title}
          </h2>
          <p className='flex flex-col justify-end w-6/12'>
            {data.description ? data.description : 'No Description'}
          </p>
        </div>
        <div className="">
          <img
            src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
            className="w-full object-cover"
            alt={`${data.title}`}
          />
        </div>
      </div>
    </section>
  )
}

export default Page
