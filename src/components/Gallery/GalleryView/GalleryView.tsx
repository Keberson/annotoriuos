import React, {useEffect, useState} from "react";
import {
    AnnotoriousOpenSeadragonAnnotator,
    OpenSeadragonAnnotationPopup,
    OpenSeadragonAnnotator,
    OpenSeadragonViewer, useAnnotations,
    useAnnotator
} from "@annotorious/react";

import CommentPopup from "../CommentPopup/CommentPopup";
import Loader from "../../Loader/Loader";
import {Flex} from "antd";

interface GalleryViewProps {
    mode: "move" | "draw",
    tool: "rectangle" | "polygon"
}

const GalleryView: React.FC<GalleryViewProps> = ({ mode, tool }) => {
    const annotator = useAnnotator<AnnotoriousOpenSeadragonAnnotator>();
    const annotations = useAnnotations();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('Annotations ', annotations);
    }, [annotations]);

    useEffect(() => {
        if (annotator) {
            setIsLoading(true);

            annotator.loadAnnotations('/images/example_1.json')
                .then(() => {
                    setIsLoading(false);
                    console.log('loaded', annotator.getAnnotations())
                })
                .catch(err => {
                    setIsLoading(false);
                    console.error('err', err)
                });
        }
    }, [annotator]);

    // if (annotator) {
    //     annotator.on('clickAnnotation', (annotation) => {
    //         console.log('clicked', annotation);
    //         const { maxX, minX, maxY, minY } = annotation.target.selector.geometry.bounds;
    //     });
    // }

    return (
        <Flex style={{ height: "100%", position: "relative" }}>
            <Loader isSpin={isLoading} />
            <OpenSeadragonAnnotator
                drawingEnabled={mode === "draw"}
                tool={tool}
            >
                <OpenSeadragonViewer
                    options={{
                        tileSources: {
                            type: 'image',
                            url: '/images/example.jpg',
                        },
                        prefixUrl: '/openseadragon-images/'
                    }}
                    className="openseadragon"
                />
                <OpenSeadragonAnnotationPopup popup={props => (
                    <CommentPopup {...props} />
                )} />
            </OpenSeadragonAnnotator>
        </Flex>
    );
};

export default GalleryView;
