import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {IAddAnnotation, IAnnotations, IMultiSaveAnnotations} from "../types/IAnnotation";

export const annotationApi = createApi({
    reducerPath: 'annotationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/annotations' }),
    endpoints: (builder) => ({
        getAnnotationsById: builder.query<IAnnotations, string>({
            query: (id) => `/${id}`,
        }),
        addAnnotation: builder.mutation<void, IAddAnnotation>({
            query: ({ id, body }) => ({ url: `/${id}`, method: 'POST', body: body }),
        }),
        updateAnnotation: builder.mutation<void, IAddAnnotation>({
            query: ({ id, body }) => ({ url: `/${id}`, method: 'PUT', body: body }),
        }),
        deleteAnnotation: builder.mutation<void, IAddAnnotation>({
            query: ({ id, body }) => ({ url: `/${id}`, method: 'DELETE', body: body }),
        }),
        multiSaveAnnotations: builder.mutation<void, IMultiSaveAnnotations>({
            query: ({ id, body }) => ({ url: `/${id}?multiSave=true`, method: 'POST', body: body }),
        })
    }),
});

export const {
    useGetAnnotationsByIdQuery,
    useAddAnnotationMutation,
    useUpdateAnnotationMutation,
    useDeleteAnnotationMutation,
    useMultiSaveAnnotationsMutation
} = annotationApi;
