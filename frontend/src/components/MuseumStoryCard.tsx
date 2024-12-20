import museumstory from "../assets/images/museumstory.jpg";

type MuseumStoryCardProps = {
    name: string;
    image: string;
    title: string;
    date: string;
    action: string;
    description: string;
}

export default function MuseumStoryCard({ name, image, title, date, action, description }: MuseumStoryCardProps) {
    return <div className="">

        <div className="flex gap-2 items-center mb-7">
            <p>{name} </p>
            <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="relative w-96 flex flex-col gap-1 text-zinc-600">
            <img src={image} alt="Museum Story" className="w-full object-cover" />
            <p className="bg-white p-2 text-sm absolute top-4 left-4">Free</p>

            <p className="w-full  text-black word-wrap text-xl mt-4">{title}</p>
            <p className="text-gray-600">{date}</p>
            <p>{action}</p>
            <p className="w-[75%] text-xs word-wrap">{description}</p>
        </div>
    </div>
}
