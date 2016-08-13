export interface User {
    name: string;
    address?: {
        street: string;
        postCode?: string;
    }
}