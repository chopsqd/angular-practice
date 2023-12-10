export interface IUser {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface IFBAuthResponse {
  idToken: string
  expiresIn: string
}

export interface IPost {
  id?: string
  title: string
  text: string
  author: string
  date: Date
}

export interface ICreatePostResponse {
  name: string
}
