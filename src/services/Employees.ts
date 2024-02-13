/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEmployeeParams } from '../models/CreateEmployeeParams';
import type { EmployeeResponse } from '../models/EmployeeResponse';
import type { EmployeesPageResponse } from '../models/EmployeesPageResponse';
import type { UpdateEmployeeParams } from '../models/UpdateEmployeeParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Employees {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of employees
     * @param page
     * @param pageSize
     * @param token Organization token
     * @returns EmployeesPageResponse Employees list
     * @throws ApiError
     */
    public list(
        page: number,
        pageSize: number,
        token: string,
    ): CancelablePromise<EmployeesPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/employees',
            query: {
                'page': page,
                'pageSize': pageSize,
                'token': token,
            },
        });
    }

    /**
     * Create employee object
     * @param token Organization token
     * @param requestBody
     * @returns any Employee created
     * @throws ApiError
     */
    public create(
        token: string,
        requestBody: CreateEmployeeParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/employees',
            query: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }

    /**
     * Get an employee by id
     * @param id
     * @param token Organization token
     * @returns EmployeeResponse Employee object
     * @throws ApiError
     */
    public get(
        id: number,
        token: string,
    ): CancelablePromise<EmployeeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/employees/{id}',
            path: {
                'id': id,
            },
            query: {
                'token': token,
            },
        });
    }

    /**
     * Update employee object
     * @param id Employee Id
     * @param token Organization token
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public update(
        id: number,
        token: string,
        requestBody: UpdateEmployeeParams,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/employees/{id}',
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
