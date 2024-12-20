import VisitCard from "./VisitCard";
import narayanhiti from '../assets/images/narayanhiti.jpg';
import museum1 from '../assets/images/museum3.jpg';


export default function VisitCards() {
    return (
        <div className="pl-10 py-8 text-3xl">
            Visit In Person & Get Up Close To Objects
            <div className="flex gap-4 mt-5">
                <VisitCard
                    title="Narayanhiti Palace Museum"
                    status="Free Entry"
                    image={narayanhiti}
                    opening="Opens 10 AM Daily"
                    description="Explore the rich history of Nepal's monarchy in this iconic palace turned museum, located in the heart 
                    of Kathmandu."
                />
                <VisitCard
                    title="Patan Museum"
                    status="Open Now"
                    image={museum1}
                    opening="Opens 26 Jan"
                    description="Discover centuries of artistic heritage at Patan Museum, showcasing exquisite craftsmanship in the ancient royal palace."
                />
            </div>
        </div>
    )
}
