type VisitCardProp = {
    status: "Coming Soon" | "Free Entry" | "Open Now";
    image: string;
    opening: string;
    title: string;
    description: string;
}

export default function VisitCard({ status, image, opening, title, description }: VisitCardProp) {
    return <div className="w-[45%] relative flex flex-col gap-2">

        <span className="text-sm">
            {status}
        </span>

        <div className="relative w-full">
            <img src={image} alt={title} className="w-full" />
            <span className="absolute bottom-5 left-5 bg-white p-5 text-sm">{opening}</span>
        </div>

        <p className="text-lg border-b border-b-black w-fit">{title}</p>
        <p className="text-sm word-wrap max-w-full">{description}</p>
    </div>
}
