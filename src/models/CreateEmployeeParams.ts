/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateServiceBookingParams } from './CreateServiceBookingParams';

export type CreateEmployeeParams = {
    email: string;
    description?: string;
    roles: Array<string>;
    enabled: boolean;
    /**
     * List of services to assigned to the employee
     */
    services?: Array<CreateServiceBookingParams>;
};

