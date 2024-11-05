import {ImageAnnotation} from "@annotorious/react";

export interface IAnnotation {
    annotation: ImageAnnotation;
}

export interface IAnnotations {
    annotations: IAnnotation[]
}

export interface IAddAnnotation {
    id: number,
    body: ImageAnnotation
}

export interface IMultiSaveAnnotations {
    id: number,
    body: ImageAnnotation[]
}

