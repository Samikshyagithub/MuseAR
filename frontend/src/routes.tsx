import Artifacts from "./pages/Artifacts"
import LandingPage from "./pages/LandingPage"
import Tour from "./pages/Tour"
import TourBhaktapur from "./pages/TourBhaktapur"
import TourPatan from "./pages/TourPatan"

export const routes = [
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/tour",
        element: <Tour />
    },
    {
        path: "/artifacts",
        element: <Artifacts />
    },
    {
        path: "/tour/patan",
        element: <TourPatan />
    },
    {
        path: "/tour/bhaktapur",
        element: <TourBhaktapur />
    },

]
