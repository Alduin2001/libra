
export interface UserRequest extends Request{
    user:{
        id:number,
        role:string
    }
}