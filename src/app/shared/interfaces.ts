export interface IUser {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface IFBAuthResponse {
  idToken: string
  expiresIn: string
}
