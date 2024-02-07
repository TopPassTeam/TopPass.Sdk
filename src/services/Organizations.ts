/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganizationParams } from '../models/CreateOrganizationParams';
import type { EmployeeLoginResponse } from '../models/EmployeeLoginResponse';
import type { EmployeeOrganizationPageResponse } from '../models/EmployeeOrganizationPageResponse';
import type { OrganizationResponse } from '../models/OrganizationResponse';
import type { OrganizationRolesResponse } from '../models/OrganizationRolesResponse';
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
     * @param requestBody
     * @returns any Organization object updated successfully
     * @throws ApiError
     */
    public update(
        id: string,
        requestBody: UpdateOrganizationParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Organization not found`,
            },
        });
    }

    /**
     * Login to an organization
     * @param id Organization Id
     * @returns EmployeeLoginResponse login succeeded
     * @throws ApiError
     */
    public login(
        id: string,
    ): CancelablePromise<EmployeeLoginResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `organization does not exist or employee is not part of the organization`,
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

    /**
     * Get user organizations
     * @param page
     * @param pageSize
     * @returns EmployeeOrganizationPageResponse List of current user organizations
     * @throws ApiError
     */
    public getUserOrganizations(
        page: number,
        pageSize: number,
    ): CancelablePromise<Array<EmployeeOrganizationPageResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Get organization defined roles
     * @returns OrganizationRolesResponse
     * @throws ApiError
     */
    public getRoles(): CancelablePromise<OrganizationRolesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/roles',
        });
    }

}
