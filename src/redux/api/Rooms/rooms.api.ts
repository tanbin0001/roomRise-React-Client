import { baseApi } from "../baseApi";


const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRooms: builder.query({
            query: () => ({
                url: '/rooms',
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

export const { useGetAllRoomsQuery } = roomApi