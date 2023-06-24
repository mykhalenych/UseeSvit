export const isUserHasAuthTokens = () => localStorage.getItem('token') !== null;

export const getAuthTokens = () => {
    if (isUserHasAuthTokens()) {
        return localStorage.getItem('token') as string;
    }

    return null;
};
