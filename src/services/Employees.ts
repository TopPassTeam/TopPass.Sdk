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
     * @returns EmployeesPageResponse Employees list
     * @throws ApiError
     */
    public list(
        page: number,
        pageSize: number,
    ): CancelablePromise<EmployeesPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/employees',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Create employee object
     * @param requestBody
     * @returns any Employee created
     * @throws ApiError
     */
    public create(
        requestBody: CreateEmployeeParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/employees',
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
     * @returns EmployeeResponse Employee object
     * @throws ApiError
     */
    public get(
        id: number,
    ): CancelablePromise<EmployeeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/employees/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update employee object
     * @param id Employee Id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public update(
        id: number,
        requestBody: UpdateEmployeeParams,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/employees/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
