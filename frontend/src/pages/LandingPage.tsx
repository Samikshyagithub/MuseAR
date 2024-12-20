import ExploreMuseum from "../components/ExploreMuseum";
import Header from "../components/Header";
import HeaderMarquee from "../components/HeaderMarquee";
import HeroImage from "../components/HeroImage";
import HeroImage2 from "../components/HeroImage2";
import VisitCards from "../components/VisitCards";

import museum from "../assets/museum4.jpg";
import museum2 from "../assets/narayanhiti.jpg";
import MuseumStoryCards from "../components/MuseumStoryCards";
import Footer from "../components/Footer";

export default function LandingPage() {
    return <>
        <Header />
        <HeaderMarquee />
        <HeroImage />
        <HeroImage2 image={museum} museum="Patan Durbar Museum - Activity" date="22 Nov - 23 Dec 2024" quote="Newa Dhawa Dhintuna" type="primary" />
        <VisitCards />

        <MuseumStoryCards />

        <HeroImage2 image={museum2} museum="Culture and History" date="On 23rd January 2015, King Birendra Inagurated his Personal Residence" quote="Royal Palace and it's Grande Entique" type="secondary" />

        <ExploreMuseum />
        <Footer />
    </>
}
