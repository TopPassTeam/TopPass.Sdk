/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingsPageResponse } from '../models/BookingsPageResponse';
import type { CreateBookingParams } from '../models/CreateBookingParams';
import type { EmployeeBookingResponse } from '../models/EmployeeBookingResponse';
import type { UpdateEmployeeBookingParams } from '../models/UpdateEmployeeBookingParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BookingManager {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List employee bookings for current active organization
     * @param page
     * @param pageSize
     * @param serviceId
     * @param employeeId
     * @returns BookingsPageResponse
     * @throws ApiError
     */
    public list(
        page: number,
        pageSize: number,
        serviceId?: string,
        employeeId?: number,
    ): CancelablePromise<BookingsPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/booking-manager',
            query: {
                'serviceId': serviceId,
                'employeeId': employeeId,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Create employee booking object
     * @param requestBody
     * @returns EmployeeBookingResponse Booking object created successfully
     * @throws ApiError
     */
    public bookingManagerControllerCreate(
        requestBody: CreateBookingParams,
    ): CancelablePromise<EmployeeBookingResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/booking-manager',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update employee booking object
     * @param id
     * @param requestBody
     * @returns any Booking object updated successfully
     * @throws ApiError
     */
    public bookingManagerControllerUpdate(
        id: string,
        requestBody: UpdateEmployeeBookingParams,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/booking-manager/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
