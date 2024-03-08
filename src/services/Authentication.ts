/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from '../models/AccessTokenResponse';
import type { AuthenticateUserParams } from '../models/AuthenticateUserParams';
import type { CreateUserParams } from '../models/CreateUserParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Authentication {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create new user and return authentication token
     * @param requestBody
     * @returns AccessTokenResponse Access token
     * @throws ApiError
     */
    public register(
        requestBody: CreateUserParams,
    ): CancelablePromise<AccessTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Authenticate user and return authentication token
     * @param requestBody
     * @returns AccessTokenResponse Access token
     * @throws ApiError
     */
    public login(
        requestBody: AuthenticateUserParams,
    ): CancelablePromise<AccessTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid credentials`,
            },
        });
    }

    /**
     * Terminate authenticated user session
     * @returns void
     * @throws ApiError
     */
    public logout(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/logout',
        });
    }

    /**
     * refresh an existing authentication token
     * @param token Refresh token
     * @returns AccessTokenResponse A new authentication and refresh tokens
     * @throws ApiError
     */
    public refreshToken(
        token: string,
    ): CancelablePromise<AccessTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/refresh',
            query: {
                'token': token,
            },
            errors: {
                400: `Bad token`,
            },
        });
    }

    /**
     * Verify user account
     * @param token
     * @returns any Logout succeeded
     * @throws ApiError
     */
    public verify(
        token: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/auth/verify',
            query: {
                'token': token,
            },
        });
    }

    /**
     * Send verification request to user
     * @returns any Logout succeeded
     * @throws ApiError
     */
    public sendVerificationRequest(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/verify',
        });
    }

}
