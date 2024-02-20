/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeOrganizationPageResponse } from '../models/EmployeeOrganizationPageResponse';
import type { OrganizationLoginResponse } from '../models/OrganizationLoginResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationsAuth {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Login to an organization
     * @param id Organization Id
     * @returns OrganizationLoginResponse login succeeded
     * @throws ApiError
     */
    public login(
        id: string,
    ): CancelablePromise<OrganizationLoginResponse> {
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
     * Get user organizations
     * @param page
     * @param pageSize
     * @returns EmployeeOrganizationPageResponse List of current user organizations
     * @throws ApiError
     */
    public getUserOrganizations(
        page: number,
        pageSize: number,
    ): CancelablePromise<EmployeeOrganizationPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

}
