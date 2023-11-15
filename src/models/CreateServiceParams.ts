/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateEmployeeBookingParams } from './CreateEmployeeBookingParams';

export type CreateServiceParams = {
    name: string;
    description: string;
    metadata?: Record<string, any>;
    days: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'all';
    price?: string;
    currency?: string;
    /**
     * Service duration in minutes
     */
    duration: number;
    categories?: Array<string>;
    employees?: Array<CreateEmployeeBookingParams>;
};

