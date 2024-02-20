/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateServiceBookingParams } from './CreateServiceBookingParams';

export type CreateEmployeeParams = {
    email: string;
    description?: string;
    /**
     * Employee roles, default roles: User, Employee
     */
    roles?: Array<string>;
    enabled?: boolean;
    metadata?: Record<string, any>;
    /**
     * List of services to assigned to the employee
     */
    services?: Array<CreateServiceBookingParams>;
};

