import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_PATHS } from "~/constants";
import type { SignInTypes, SignInResponse } from "~/types/signInTypes";

export const signInApi = createApi({
    reducerPath: "signInApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation<SignInResponse, SignInTypes>({
            query: (credentials) => ({
                url: API_PATHS.SIGNIN,
                method: "POST",
                body: credentials,
            })
        })
    })
});

export const { useSignInMutation } = signInApi;