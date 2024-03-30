import Image from "next/image";
import Link from "next/link";

export interface ArtCardProps {
    title: string;
    image_id: string | number;
    id: string;
}

const ArtCard = ({title, image_id, id}: ArtCardProps) => {
    return (
    <Link href={`/artwork/${id}`}>
        <div className="bg-white duration-500 hover:scale-105 hover:shadow-xl w-80 border border-gray-900 p-4">
            <Image src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} className="h-80 w-72 object-cover" alt={`${title}`} height={320} width={288} />
            <h2 className="text-base bold mt-3 h-12 overflow-hidden truncate ">{ title }</h2>
        </div>
    </Link>
  )
}

export default ArtCard
