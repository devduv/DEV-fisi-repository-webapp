export interface IStudent {
    id?: number;
    names?: string;
    lastName?: string;
    secondLastName?: string;
    email?: string;
  }
  

export interface IResponseStudent{
    data:{
        data:IStudent
    },
    message:{
        code:string
    }
} 

export interface IResponseUpdateStudent{
    data:{
        data:{
            data:IStudent
        }
    },
    message:{
        code:string
    }
}