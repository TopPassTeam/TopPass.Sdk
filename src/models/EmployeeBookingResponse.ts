/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmployeeBookingResponse = {
    id: string;
    /**
     * Employee full name
     */
    employee: string;
    /**
     * Service name
     */
    service: string;
    startTime: string;
    endTime: string;
    days: Array<string>;
    metadata: Record<string, any>;
};

