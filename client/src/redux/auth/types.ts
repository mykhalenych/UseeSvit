export interface IAuthState {
    user: {
        name: string;
        email: string;
    };
}

export interface SignInRequest {
    email: string;
    password: string;
    name: string;
}

export interface LogInRequest {
    email: string;
    password: string;
}
