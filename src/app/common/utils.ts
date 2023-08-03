export const isUserHasAuthTokens = () => typeof window !== 'undefined' && localStorage.getItem('token') !== null;

export const getAuthTokens = () => {
    if (isUserHasAuthTokens()) {
        return localStorage.getItem('token');
    }
    return null;
};

export const resetAuthToken = () => localStorage.removeItem('token');
