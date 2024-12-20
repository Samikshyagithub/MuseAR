//Necessary imports
import { useRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

//Image files
import firstPhoto from "../assets/tours/bhaktapur1.jpg";
import secondPhoto from "../assets/tours/bhaktapur2.jpg";
import thirdPhoto from "../assets/tours/bhaktapur3.jpg";
// import fourthPhoto from "../assets/tours/patan4.jpg";

const TourBhaktapur = () => {
    const instanceRef = useRef(null);

    //All plugins (can declare multiple)
    const plugins = [[VirtualTourPlugin, { renderMode: "3d" }]];

    //Function that instantiates plugin and data to it
    const handleReady = (instance: any) => {
        instanceRef.current = instance;

        const virtualTour = instanceRef.current.getPlugin(VirtualTourPlugin);
        virtualTour.setNodes([
            {
                id: "1",
                panorama: thirdPhoto,
                name: "One",
                links: [{ nodeId: "2", position: { textureX: 100, textureY: 1800 } }],
                defaultZoomLvl: 4,
            },
            {
                id: "2",
                panorama: secondPhoto,
                name: "Two",
                links: [
                    { nodeId: "1", position: { textureX: 4500, textureY: 1800 } },
                    { nodeId: "3", position: { textureX: 100, textureY: 1800 } },
                ],
                defaultZoomLvl: 0,
            },
            // {
            //     id: "3",
            //     panorama: thirdPhoto,
            //     name: "Three",
            //     links: [
            //         { nodeId: "2", position: { textureX: 3500, textureY: 1800 } },
            //         { nodeId: "4", position: { textureX: 100, textureY: 1800 } },
            //     ],
            //     defaultZoomLvl: 0,
            // },
            {
                id: "3",
                panorama: firstPhoto,
                name: "Three",
                links: [{ nodeId: "3", position: { textureX: 3500, textureY: 1800 } }],
                defaultZoomLvl: 0,
            },
        ]);

    };

    return (
        <>
            <ReactPhotoSphereViewer
                src={firstPhoto}
                plugins={plugins}
                height={"100vh"}
                width={"100vw"}
                onReady={handleReady}
            ></ReactPhotoSphereViewer>
        </>
    )
}

export default TourBhaktapur;