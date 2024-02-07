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
     * @returns UserResponse User data
     * @throws ApiError
     */
    public getUser(): CancelablePromise<UserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * Update current authenticated user data
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateUser(
        requestBody: UpdateUserParams,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
