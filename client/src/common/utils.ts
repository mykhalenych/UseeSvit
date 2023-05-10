export const isUserHasAuthTokens = () => localStorage.getItem('token') !== null;

export const getAuthTokens = () => {
    if (isUserHasAuthTokens()) {
        const tokensRaw = localStorage.getItem('token') as string;

        return tokensRaw;
    }
    return null;
};
