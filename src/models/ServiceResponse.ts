/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DurationType } from './DurationType';

export type ServiceResponse = {
    id: string;
    name: string;
    description: string;
    duration: DurationType;
    price: string;
    currency: string;
    metadata: Record<string, any>;
    categories?: Array<string>;
};

