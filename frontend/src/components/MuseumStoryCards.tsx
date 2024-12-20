import MuseumStoryCard from "./MuseumStoryCard";
import './css/styles.css';

import museumstory1 from "../assets/images/museumstory2.jpg";
import museumstory2 from "../assets/images/museumstory.jpg";
import museumstory3 from "../assets/images/museumstory3.jpg";
import museumstory4 from "../assets/images/museumstory4.jpg";

export default function MuseumStoryCards() {
    return <div className="relative mt-10">
        <p className="text-3xl pl-10 uppercase mb-5"> What's on </p>

        <div className="overflow-x-scroll flex gap-4 hide-scrollbar px-10 py-6">
            <div className="absolute right-10 top-5 z-50">
                <button className="bg-black py-5 px-3 text-white hover:outline-black hover:bg-white hover:text-black transition-colors ease-in-out duration-100 hover:outline">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="bg-black py-5 px-3 text-white hover:outline-black hover:bg-white hover:text-black transition-colors ease-in-out duration-100 hover:outline">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <MuseumStoryCard
                name="Hanumandhoka - Basantapur Durbar Square"
                image={museumstory1}
                title="The story of Vajra and its descent"
                date="2024 Dec 14"
                action="Tale"
                description="Marking 25 years since the Vajra was placed in the premises"
            />
            <MuseumStoryCard
                name="Uttar Dhoka - Gateway to Kasthamandap"
                image={museumstory4}
                title="How Royal Family opened the gates of palace to the public"
                date="2022 Nov 28"
                action="History"
                description="Ever since the Royal Palace opened the Uttar Dhoka for..."
            />
            <MuseumStoryCard
                name="Lumbini - Birthplace of Lord Buddha"
                image={museumstory3}
                title="Explore the Holy Site Where Buddha Was Born"
                date="2024 Mar 20"
                action="Pilgrimage"
                description="Discover the serene beauty of Lumbini a sacred pilgrimage site revered by Buddhists worldwide."

            />
            <MuseumStoryCard
                name="Swayambhunath Stupa - The Monkey Temple"
                image={museumstory2}
                title="A Sacred Site with Panoramic Views of Kathmandu"
                date="2022 Aug 30"
                action="Spirituality"
                description="Swayambhunath a UNESCO World Heritage Site, is a spiritual destination offering history, religion, and stunning views."


            />
        </div>
    </div>
}
