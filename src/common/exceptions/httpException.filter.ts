import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Response} from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const err = exception.getResponse() as
      | {message: any; statusCode: number}
      | {error: string; message: string[]; statusCode: number | null};

    if (err.statusCode) {
      return response.status(status).json({
        code: err.statusCode,
        message: err.message,
        data: '',
      });
    }
    response.status(status).json({code: status, message: err, data: ''});
  }
}
