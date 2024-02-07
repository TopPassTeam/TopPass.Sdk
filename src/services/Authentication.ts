/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateUserParams } from '../models/AuthenticateUserParams';
import type { CreateUserParams } from '../models/CreateUserParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Authentication {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create new user
     * @param requestBody
     * @returns any Registration succeeded
     * @throws ApiError
     */
    public register(
        requestBody: CreateUserParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Authenticate user
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public login(
        requestBody: AuthenticateUserParams,
    ): CancelablePromise<void> {
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

}
