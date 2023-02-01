import { AxiosError } from 'axios';

export default class ResponseError {
  message: string;

  code: number;

  constructor({ response, isAxiosError }: AxiosError | any) {
    const text = response?.data?.message as string;
    const message =
      response?.status === 401
        ? 'Sua sessão expirou. Por favor faça o login de novo.'
        : text || 'Ocorreu um erro tente novamente';

    this.message = isAxiosError ? message : '';
    this.code = response?.status || 0;
  }
}
