/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

export type TArgsParam = Record<string, any>;

//response redux
export type TError = {
  data: {
    message: string;
    stack: string;
    errorMessage: {
      path: string;
      message: string;
    };
    success: boolean;
  };
  details: Array<TErrorDetails>;
  status: number;
};

export type TMeta = {
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: true;
    hasPreviousPage: false;
  };
  timestamp: Date;
};
export type TResponse<T> = {
  data?: T;
  error?: TError;
  metadata?: TMeta;
  success: boolean;
  message: string;
  statusCode?: number;
};
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
