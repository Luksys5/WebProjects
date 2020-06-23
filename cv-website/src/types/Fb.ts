export type LoginStatus = 'connected' | 'not_authorized' | 'unknown';

export interface LoginStatusResponse {
    status: LoginStatus,
    authResponse?: {
        accessToken: string,
        expiresIn: string,
        signedRequest: string,
        userID: string
    }
}
