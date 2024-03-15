
import { baseApi } from "../baseApi";


const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllReviews: builder.query({
            query: () => ({
                url: '/review',
                method: "GET"
            })
        }),
        // register: builder.mutation({
        //     query: (userinfo) => ({
        //         url: 'auth/register',
        //         method: "POST",
        //         body: userinfo
        //     })
        // })
    })
})

export const {  useGetAllReviewsQuery } = roomApi