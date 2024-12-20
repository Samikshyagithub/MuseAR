import "./css/styles.css";

type HeroImage2Props = {
    image: string;
    museum: string;
    quote: string;
    date: string;
    type: "primary" | "secondary";
}

export default function HeroImage2({ image, museum, quote, date, type }: HeroImage2Props) {
    return <div className={`flex flex-col gap-4 ${type == "primary" ? "bg-primary" : "bg-black"} pb-16 relative overflow-hidden bottom-bent`}>
        <img src={image} alt="" className="w-[70%] object-cover" />
        <div className="flex flex-col gap-1 text-white w-[70%]">
            <p className="text-sm pl-10 leading-snug">{museum}</p>
            <span className="flex justify-between">
                <p className="text-4xl pl-10">{quote}</p>
                <p className="text-xl">{date}</p>
            </span>
        </div>
    </div>
}
