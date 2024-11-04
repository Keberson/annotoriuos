import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {IImage} from "../types/IImage";

export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/images' }),
    endpoints: (builder) => ({
        getImage: builder.query<IImage, string>({
            query: (id) => `/${id}`,
        })
    }),
});

export const { useGetImageQuery } = imagesApi;
