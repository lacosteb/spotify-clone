import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'aed24550a7msh86be392e86b64ccp131240jsnb429fbfe0b7d');

            return headers;
        }
    }),
    endpoints: (buidler) => ({
        getTopCharts: buidler.query({ query: '/charts/world'})
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;