import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const backendApi = createApi({
	reducerPath: "backendApi",
		baseQuery: fetchBaseQuery({
			baseUrl: "https://api.wonderbox.cloud",
			credentials: "include"
			}),
			endpoints: (builder) => ({
				getMeasurements: builder.query({query: (deviceId: string, dateStart: string) => 
											   `logdispo/get?dispos=${deviceId}&sortBy=ts_registrazione&order=desc&dateStart=${dateStart}`
				}),
				login: builder.mutation({
					query: (loginCredentials) => ({
						url: "/auth/login",
						method: "POST",
						body: loginCredentials,
				}) 
			})

		})
	})

export const { useGetMeasurementsQuery, useLoginMutation } = backendApi
