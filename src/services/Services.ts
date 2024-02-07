/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateServiceParams } from '../models/CreateServiceParams';
import type { ServiceDetailsResponse } from '../models/ServiceDetailsResponse';
import type { ServicesPageResponse } from '../models/ServicesPageResponse';
import type { UpdateServiceParams } from '../models/UpdateServiceParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Services {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List services by organization ID
     * @param page
     * @param pageSize
     * @returns ServicesPageResponse List of service objects
     * @throws ApiError
     */
    public list(
        page: number,
        pageSize: number,
    ): CancelablePromise<ServicesPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Create a service object
     * @param requestBody
     * @returns any Service object created successfully
     * @throws ApiError
     */
    public create(
        requestBody: CreateServiceParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get services by ID
     * @param id
     * @returns ServiceDetailsResponse Service object
     * @throws ApiError
     */
    public get(
        id: string,
    ): CancelablePromise<ServiceDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update an existing service object
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public update(
        id: string,
        requestBody: UpdateServiceParams,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/services/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
