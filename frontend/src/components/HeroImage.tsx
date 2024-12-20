import hero_image from "../assets/museum2.jpg";

export default function HeroImage() {
    return (
        <div className="h-screen relative">
            <img src={hero_image} alt="hero_image" className="h-screen w-full object-cover" />
            <p className="absolute uppercase bottom-10 left-10 w-[40%] word-wrap text-white text-3xl font-bold leading-normal">
                Delve into the hidden stories & unexpected treasures that shaped Kathmandu
            </p>
        </div>

    )
}
