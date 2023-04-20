export interface IAuthState {
    jwtToken: string;
}

export interface SignInRequest {
    email: string;
    password: string;
    name: string;
}