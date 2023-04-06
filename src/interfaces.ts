import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFAQ {
    id?: number;
    first_name?: string;
    email?: string;
    designation?: string;
    context: WebPartContext;
}