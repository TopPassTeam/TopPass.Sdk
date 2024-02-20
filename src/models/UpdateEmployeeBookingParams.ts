/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateEmployeeBookingParams = {
    startTime?: string;
    endTime?: string;
    days?: Array<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'all'>;
    /**
     * Indicate if the booking is active or not
     */
    enabled?: boolean;
    metadata: Record<string, any>;
};

