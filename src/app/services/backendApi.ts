import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const backendApi = createApi({
	reducerPath: "backendApi",
		baseQuery: fetchBaseQuery({
			baseUrl: "api",
			credentials: "include"
			}),
			endpoints: (builder) => ({
				getMeasurements: builder.query({query: ({deviceId, dateStart}) => 
											   `logdispo/get?dispos=${deviceId}&sortBy=ts_registrazione&order=desc&dateStart=${dateStart}`
				}),
				login: builder.mutation({
					query: (loginCredentials) => ({
						url: "/auth/login",
						method: "POST",
						body: {
							email: loginCredentials.email,
							password: loginCredentials.password
						},
				}),
				
			}),
			logout: builder.mutation({
					query: () => ({
						url: "/auth/logout",
						method: "POST",
				})
			}),

		})
	})

export const { useGetMeasurementsQuery, useLoginMutation, useLogoutMutation } = backendApi
