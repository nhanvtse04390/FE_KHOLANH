export interface SignInResponse {
    access_token: string;
    change_required: boolean;
    expired_at: number;
    permissions: string[];
    refresh_token: string;
    refresh_token_expired_at: number;
    session_id: string;
    username: string;
}
