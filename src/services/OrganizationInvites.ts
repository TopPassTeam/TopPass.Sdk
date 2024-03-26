/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationInvites {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Activate an organization invite
     * @param token Invitation token
     * @returns any Activation succeeded
     * @throws ApiError
     */
    public activateInvite(
        token: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/invite',
            query: {
                'token': token,
            },
        });
    }

}
