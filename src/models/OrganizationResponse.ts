/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationLocation } from './OrganizationLocation';
import type { OrganizationScheduleType } from './OrganizationScheduleType';

export type OrganizationResponse = {
    id: string;
    name: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    location: OrganizationLocation;
    metadata: Record<string, any>;
    schedule: Array<OrganizationScheduleType>;
};

