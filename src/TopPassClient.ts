/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { Authentication } from './services/Authentication';
import { BookingManager } from './services/BookingManager';
import { Categories } from './services/Categories';
import { Employees } from './services/Employees';
import { Organizations } from './services/Organizations';
import { Services } from './services/Services';
import { Users } from './services/Users';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class TopPassClient {

    public readonly authentication: Authentication;
    public readonly bookingManager: BookingManager;
    public readonly categories: Categories;
    public readonly employees: Employees;
    public readonly organizations: Organizations;
    public readonly services: Services;
    public readonly users: Users;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.authentication = new Authentication(this.request);
        this.bookingManager = new BookingManager(this.request);
        this.categories = new Categories(this.request);
        this.employees = new Employees(this.request);
        this.organizations = new Organizations(this.request);
        this.services = new Services(this.request);
        this.users = new Users(this.request);
    }
}

