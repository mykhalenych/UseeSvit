import type {ResponseType} from 'axios';

export interface IFetch {
    method: string;
    request: any;
    override?: {
        [key: string]: string;
    };
    responseType?: ResponseType;
    isAuth?: boolean;
}

export interface IError {
    message: string | string[];
}
