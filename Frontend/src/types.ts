export interface Note {
  _id:string
  title: string
  description: string
  tag: string
}
export interface NewNote {
  title: string
  description: string
  tag: string
}
export interface EditedNote {
  id:string
  edittitle: string
  editdescription: string
  edittag: string
}


export interface User{
  email:string
  password: string
}
export interface NewUser{
  name:string
  email:string
  password: string
  cpassword: string
}