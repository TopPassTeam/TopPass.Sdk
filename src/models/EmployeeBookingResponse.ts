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
     * Indicate if the booking is active or not
     */
    enabled: boolean;
    /**
     * Additional metadata for the booking
     */
    metadata: Record<string, any>;
};

