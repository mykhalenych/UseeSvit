export interface IAuthState {
    user: {
        id: string;
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
