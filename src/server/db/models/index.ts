export interface TAuthors {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    banned?: string;
    created_at?: Date;
}

export interface TBlogs {
    id?: number;
    title?: string;
    content?: string;
    authorid?: number;
    created_at?: Date;
}

export interface TTags {
    id?: string;
    name?: string;
    created_at?: Date;
}

export interface CannedResponse {
    insertId?: number;
    affectedRows?: number;
    changedRows?: number;
}