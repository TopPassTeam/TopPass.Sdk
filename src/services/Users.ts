/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateUserParams } from '../models/UpdateUserParams';
import type { UserResponse } from '../models/UserResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Users {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get current authenticated user data
     * @param trueClientIp Client IP
     * @returns UserResponse User data
     * @throws ApiError
     */
    public getUser(
        trueClientIp?: string,
    ): CancelablePromise<UserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            headers: {
                'true-client-ip': trueClientIp,
            },
        });
    }

    /**
     * Update current authenticated user data
     * @param requestBody
     * @param trueClientIp Client IP
     * @returns void
     * @throws ApiError
     */
    public updateUser(
        requestBody: UpdateUserParams,
        trueClientIp?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/users',
            headers: {
                'true-client-ip': trueClientIp,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
