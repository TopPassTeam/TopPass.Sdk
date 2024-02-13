/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookedEmployee } from './BookedEmployee';
import type { BookedService } from './BookedService';

export type EmployeeBookingResponse = {
    id: string;
    /**
     * Employee details
     */
    employee: BookedEmployee;
    /**
     * Service details
     */
    service: BookedService;
    /**
     * Booking start time
     */
    startTime: string;
    /**
     * Booking end time
     */
    endTime: string;
    /**
     * Booking days
     */
    days: Array<string>;
    /**
     * Additional metadata for the booking
     */
    metadata: Record<string, any>;
};

