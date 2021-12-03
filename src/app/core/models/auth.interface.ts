export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    id: string;
    first_name: string;
    last_name: string;
    access_token?: string;
}