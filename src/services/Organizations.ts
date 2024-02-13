/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganizationParams } from '../models/CreateOrganizationParams';
import type { OrganizationResponse } from '../models/OrganizationResponse';
import type { UpdateOrganizationParams } from '../models/UpdateOrganizationParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Organizations {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get organization object by id
     * @param id
     * @returns OrganizationResponse Organization object
     * @throws ApiError
     */
    public getOrganizationById(
        id: string,
    ): CancelablePromise<OrganizationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update organization object data
     * @param id
     * @param token Organization token
     * @param requestBody
     * @returns any Organization object updated successfully
     * @throws ApiError
     */
    public update(
        id: string,
        token: any,
        requestBody: UpdateOrganizationParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            query: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Organization not found`,
            },
        });
    }

    /**
     * Create an organization object
     * @param requestBody
     * @returns OrganizationResponse Organization object created successfully
     * @throws ApiError
     */
    public create(
        requestBody: CreateOrganizationParams,
    ): CancelablePromise<OrganizationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
