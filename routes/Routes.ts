// Define an array of protected routes
const protectedRoutes: string[] = [
    '/secret-page',
    '/profile',
    '/chats',
    '/account'
];


const authRoutes: string[] = [
    '/auth/signin',
    '/auth/signup',
    '/auth/forget-password',
    '/auth/reset-password'
];

export { protectedRoutes, authRoutes };
