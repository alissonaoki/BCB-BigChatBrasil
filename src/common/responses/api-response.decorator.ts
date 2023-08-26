import { applyDecorators, HttpCode } from '@nestjs/common';

export const ApiResponse = <T>(statusCode: number, message: string) => {
  return applyDecorators(
    HttpCode(statusCode),
    wrapResponse(statusCode, message)
  );
};

const wrapResponse = (statusCode: number, message: string) => {
  return (target, key, descriptor) => {
    descriptor.value = async function (...args) {
      const response = await descriptor.value.apply(this, args);
      return createApiResponse(statusCode, message, response);
    };
    return descriptor;
  };
};

const createApiResponse = (statusCode: number, message: string, data: any) => {
  return {
    message,
    data,
    status: statusCode === 201 ? 'created' : 'success',
  };
};
