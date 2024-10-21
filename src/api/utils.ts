// construct url that has "/api" prefix, so that can proxy for it, to avoid CORS issue.
// e.g for login, construct url via: baseUrlApi("login")
export const baseUrlApi = (url: string) => `/api/${url}`;
