/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEmployeeParams } from '../models/CreateEmployeeParams';
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
     * Update employee object
     * @param employeeId
     * @param requestBody
     * @returns any Employee updated
     * @throws ApiError
     */
    public update(
        employeeId: number,
        requestBody: UpdateEmployeeParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/employees/{employeeId}',
            path: {
                'employeeId': employeeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Employee not found`,
            },
        });
    }

}
