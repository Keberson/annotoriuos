import React, {useEffect, useState} from "react";
import {
    AnnotoriousOpenSeadragonAnnotator, ImageAnnotation,
    OpenSeadragonAnnotationPopup,
    OpenSeadragonAnnotator, OpenSeadragonAnnotatorProps,
    OpenSeadragonViewer, useAnnotations,
    useAnnotator
} from "@annotorious/react";

import CommentPopup from "../CommentPopup/CommentPopup";
import Loader from "../../Loader/Loader";
import {Button, Flex} from "antd";
import {
    useAddAnnotationMutation,
    useDeleteAnnotationMutation,
    useGetAnnotationsByIdQuery
} from "../../../services/annotations";
import {useGetImageQuery} from "../../../services/images";
import {Annotator} from "@annotorious/openseadragon";

interface GalleryViewProps {
    mode: "move" | "draw",
    tool: "rectangle" | "polygon"
}

const GalleryView: React.FC<GalleryViewProps> = ({ mode, tool }) => {
    const [isNoSelect, setIsNoSelect] = useState(true);
    const [currentAnnotation, setCurrentAnnotation] = useState<ImageAnnotation | null>(null);
    const {data: annotations, isLoading: isLoadingAnnotations} = useGetAnnotationsByIdQuery('1');
    const {data: image, isLoading: isLoadingImage} = useGetImageQuery('1'); 
    const annotator = useAnnotator<AnnotoriousOpenSeadragonAnnotator>();
    const [addAnnotation] = useAddAnnotationMutation();
    const [deleteAnnotation] = useDeleteAnnotationMutation();

    useEffect(() => {
        if (annotator) {
            if (annotations) {
                annotations.annotations.forEach((annotation) => {
                    annotator.addAnnotation(annotation.annotation);
                });
            }
        }
    }, [addAnnotation, annotations, annotator]);

    if (annotator) {
        annotator.on('selectionChanged', (annotations) => {
            if (annotations.length > 0) {
                setIsNoSelect(false);
                setCurrentAnnotation(annotations[0]);
            } else {
                setIsNoSelect(true);
                setCurrentAnnotation(null);
            }
        })
    }

    const onDelete = async () => {
        if (currentAnnotation) {
            annotator.removeAnnotation(currentAnnotation);
            await deleteAnnotation({ id: 1, body: currentAnnotation });
            setCurrentAnnotation(null);
            setIsNoSelect(true);
        }
    }

    return (
        <Flex style={{ height: "100%", position: "relative" }}>
            <Flex style={{ position: "absolute", right: 5, bottom: 5, zIndex: 999 }}>
                <Button
                    type="primary"
                    disabled={isNoSelect}
                    onClick={onDelete}
                >
                    Удалить
                </Button>
            </Flex>
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
