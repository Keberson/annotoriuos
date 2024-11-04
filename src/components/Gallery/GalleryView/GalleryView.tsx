import React, {useEffect, useState} from "react";
import {
    AnnotoriousOpenSeadragonAnnotator,
    OpenSeadragonAnnotationPopup,
    OpenSeadragonAnnotator, OpenSeadragonAnnotatorProps,
    OpenSeadragonViewer, useAnnotations,
    useAnnotator
} from "@annotorious/react";

import CommentPopup from "../CommentPopup/CommentPopup";
import Loader from "../../Loader/Loader";
import {Flex} from "antd";
import {useAddAnnotationMutation, useGetAnnotationsByIdQuery} from "../../../services/annotations";
import {useGetImageQuery} from "../../../services/images";

interface GalleryViewProps {
    mode: "move" | "draw",
    tool: "rectangle" | "polygon"
}

const GalleryView: React.FC<GalleryViewProps> = ({ mode, tool }) => {
    const {data: annotations, isLoading: isLoadingAnnotations} = useGetAnnotationsByIdQuery('1');
    const {data: image, isLoading: isLoadingImage} = useGetImageQuery('1'); 
    const annotator = useAnnotator<AnnotoriousOpenSeadragonAnnotator>();
    const [addAnnotation] = useAddAnnotationMutation();

    useEffect(() => {
        if (annotator) {
            if (annotations) {
                annotations.annotations.forEach((annotation) => {
                    annotator.addAnnotation(annotation.annotation);
                });
            }
        }
    }, [addAnnotation, annotations, annotator]);

    return (
        <Flex style={{ height: "100%", position: "relative" }}>
            <Loader isSpin={isLoadingAnnotations && isLoadingImage} />
            {
                !isLoadingAnnotations && !isLoadingImage && image &&
                    <OpenSeadragonAnnotator
                        drawingEnabled={mode === "draw"}
                        tool={tool}
                    >
                        <OpenSeadragonViewer
                            options={{
                                tileSources: {
                                    type: 'image',
                                    url: `data:image/png;base64,${image.image}`,
                                },
                                prefixUrl: '/openseadragon-images/'
                            }}
                            className="openseadragon"
                        />
                        <OpenSeadragonAnnotationPopup popup={props => (
                            <CommentPopup {...props} />
                        )} />
                    </OpenSeadragonAnnotator>
            }
        </Flex>
    );
};

export default GalleryView;
