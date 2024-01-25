export interface ResponseApi<T>{

  code: string;
  body: T;
  message: string;

}
