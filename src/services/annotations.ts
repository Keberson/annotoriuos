import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {IAddAnnotation, IAnnotations} from "../types/IAnnotation";

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
        })
    }),
});

export const { useGetAnnotationsByIdQuery, useAddAnnotationMutation, useUpdateAnnotationMutation } = annotationApi;
