/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Categories {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of all categories
     * @returns any List of categories
     * @throws ApiError
     */
    public list(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/categories',
        });
    }

}
