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
     * @param token Organization token
     * @returns ServicesPageResponse List of service objects
     * @throws ApiError
     */
    public list(
        page: number,
        pageSize: number,
        token: string,
    ): CancelablePromise<ServicesPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services',
            query: {
                'page': page,
                'pageSize': pageSize,
                'token': token,
            },
        });
    }

    /**
     * Create a service object
     * @param token Organization token
     * @param requestBody
     * @returns any Service object created successfully
     * @throws ApiError
     */
    public create(
        token: string,
        requestBody: CreateServiceParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services',
            query: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get services by ID
     * @param id
     * @param token Organization token
     * @returns ServiceDetailsResponse Service object
     * @throws ApiError
     */
    public get(
        id: string,
        token: string,
    ): CancelablePromise<ServiceDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{id}',
            path: {
                'id': id,
            },
            query: {
                'token': token,
            },
        });
    }

    /**
     * Update an existing service object
     * @param id
     * @param token Organization token
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public update(
        id: string,
        token: string,
        requestBody: UpdateServiceParams,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/services/{id}',
            path: {
                'id': id,
            },
            query: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
