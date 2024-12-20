import HeaderLinks from "./HeaderLinks";
import peak_logo from "../assets/peak_logo.jpg";

export default function Header() {
    return (
        <nav className=" p-8 flex-col gap-2">
            <div className="h-32  flex justify-between items-start">

                <div className="flex gap-3">
                    <span className="text-4xl font-bold">
                        TEAM <br /> PEAK
                    </span>
                    <img src={peak_logo} alt="Mountain" className="h-16 object-cover" />
                </div>

                <div className="flex gap-8 pt-4">
                    <div className="flex gap-2 items-center">
                        Shop
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div className="flex gap-2 items-center">
                        Account
                        <i className="fa-solid fa-id-badge"></i>
                    </div>
                    <div className="flex gap-2 items-center">
                        Search
                        <i className="fa-solid fa-search"></i>
                    </div>
                </div>
            </div>

            <div className="flex gap-9">
                <HeaderLinks link="Visit" href="/home" />
                <HeaderLinks link="What's going on" href="/home" />
                <HeaderLinks link="Object & Stories" href="/home" />
                <HeaderLinks link="Schools & Communities" href="/home" />
                <HeaderLinks link="Join & Support" href="/home" />
            </div>
        </nav>
    )
}
