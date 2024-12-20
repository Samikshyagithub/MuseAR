import peak from "../assets/peak_logo.jpg"
import swayambu from "../assets/swayambhu.jpg";
import ktm from "../assets/ktm.png";
import visitnepal from "../assets/visitnepal.png";

const routes = {
    "Visit": [
        "Patan Museum",
        "Patan Museum Antiques",
        "Families",
        "Plan Your Visit",
        "Access"
    ],
    "What's On": [
        "Free Museums",
        "Group Visits",
    ],
    "Objects and Stories": [
        "About our collections",
        "What we Collect",
        "Collections access and enquiries",
        "Managing our collections",
        "Improving our collections",
    ],
    "Schools and Communities": [
        "Schools",
        "School Sessions",
        "Schools Resources",
        "Community Engagement",
    ],
    "About": [
        "Our Locations",
        "Careers",
        "Press",
        "Supporting Kathmandu Metropolis",
        "Policies",
        "Contact Us"
    ],
    "Join & Support": [
        "Donate",
        "Membership",
        "Corporate Support"
    ],
    "Bhaktapur Stories": [
        "Blog",
        "Browse by Ward",
        "Browse by Time Period"
    ],
    "Commercial": [
        "Venue Hire",
        "Picture Library",
        "Location Filming Approvals"
    ]
}

export default function Footer() {
    return <div>
        <div className="px-20 pb-20 pt-36 bg-gray relative mt-20 flex gap-y-16 justify-start flex-wrap">
            <img src={swayambu} alt="" className="w-24 absolute -top-10 left-10 object-contain bg-white rounded-full" />
            {
                Object.entries(routes).map(([key, subRoutes]) => (
                    <div key={key} className="w-1/3">
                        <h2 className="text-xl mb-2">{key}
                            <i className="ml-2 fa-solid fa-arrow-right text-xs"></i>
                        </h2>
                        <div className="flex flex-col gap-2">
                            {subRoutes.map((subRoute, index) => (
                                <p key={index} className="text-sm text-zinc-600 hover:border-b hover:cursor-pointer transition-colors w-fit ease-in-out border-b border-transparent hover:border-black duration-300">{subRoute}</p>
                            ))}
                        </div>
                    </div>
                ))
            }

            <div className="w-full flex gap-6 items-end">
                <img src={ktm} alt="" className="w-64 object-contain" />
                <img src={visitnepal} alt="" className="w-64 object-contain" />
            </div>

            <div className="w-full flex items-center gap-6">
                <img src={peak} alt="" className="h-16 w-16 object-cover rounded-full bg-blend-exclusion" />
                <p className="text-xs w-[20%] word-wrap">The Museum website was developed with the support of Team Peak for Arts and Culture.</p>
            </div>

        </div>
        <div className="bg-white text-primary text-sm p-10">Museum Website registered under KU Hackfest 2024</div>
    </div>
}
