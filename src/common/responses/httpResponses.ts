import { HttpException, HttpStatus } from '@nestjs/common';

export const SuccessResponse = (message: string, data?: any) => {
  return {
    message,
    data,
    status: 'success',
  };
};

export const CreatedResponse = (message: string, data?: any) => {
  return {
    message,
    data,
    status: 'created',
  };
};

export const NoContentResponse = (message: string) => {
  throw new HttpException(
    {
      message,
      status: 'no content',
    },
    HttpStatus.NO_CONTENT,
  );
};

export const NotFoundResponse = (message: string) => {
  throw new HttpException(
    {
      message,
      status: 'not found',
    },
    HttpStatus.NOT_FOUND,
  );
};
