export const setIsLoggedIn = (isLoggedIn: boolean) => ({
    type: 'auth/SET_IS_LOGGED_IN',
    payload: {isLoggedIn}
} as const)