import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {annotationApi} from "../services/annotations";
import {imagesApi} from "../services/images";

export const store = configureStore({
    reducer: {
        [annotationApi.reducerPath]: annotationApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(annotationApi.middleware)
            .concat(imagesApi.middleware),
})

setupListeners(store.dispatch);
