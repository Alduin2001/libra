
export interface RequestCookie extends Request{
    cookies: {[key: string]:string}
}