import {NextPage} from 'next';

export interface SignInRequest {
    email: string;
    password: string;
    name: string;
}

export interface LogInRequest {
    email: string;
    password: string;
}

export interface ForgotPasswordRequest {
    email: string;
}

export interface RecoveryPasswordRequest {
    resetToken: string;
    newPassword: string;
    passwordConfirmation: string;
}

export type TypeRoles = {
    isOnlyUser?: boolean;
};

export type NextPageAuth<P = null> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = {Component: TypeRoles};

export type TypeUser = null | {name: string};
