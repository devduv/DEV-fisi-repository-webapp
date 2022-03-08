export interface Menu {
    id?: string;
    name?: string;
    rout?: string;
    icon?: string;
    selected?: boolean;
}

export enum MenuOption {
    HOME = '/app/home',
    SEARCH = '/app/search',
    UPLOAD = '/app/uploader'
}