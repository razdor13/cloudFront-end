export interface LoginFormDTO { 
    email : string,
    password : string
}
export interface LoginResponseDTO { 
    token: string
}
export interface RegisterFormDTO { 
    fullname : string
    email : string
    password : string
}
export interface User { 
    id:number 
    email : string
    fullName : string
}
export type RegisterResponseDTO = LoginResponseDTO