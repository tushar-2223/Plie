import {ApiResponse, ApisauceInstance, create} from 'apisauce';
import {AxiosRequestConfig} from 'axios';
import {store} from '../redux-toolkit/store';
import {API_BASE_URL} from '../utils/Constant';
import type {ApiError, ApiMessageResponse} from '../utils/Types';
import {getGeneralApiProblem} from './apiProblem';

type RequestParams = Record<string, unknown>;

const apisauce: ApisauceInstance = create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

apisauce.addRequestTransform(request => {
  const token = store.getState().app.token;

  if (token) {
    request.headers = {
      ...(request.headers as RequestParams | undefined),
      Authorization: `Bearer ${token}`,
    };
  }
});

const getMessage = (data: unknown) => {
  if (!data || typeof data !== 'object') {
    return undefined;
  }

  const response = data as ApiMessageResponse;
  return response.message ?? response.meta?.message;
};

const createApiError = <T>(response: ApiResponse<T>): ApiError => {
  const problem = getGeneralApiProblem(response) ?? {kind: 'unknown' as const};

  return {
    status: response.status,
    kind: problem.kind,
    temporary: 'temporary' in problem ? problem.temporary : undefined,
    message:
      getMessage(response.data) ?? 'Something went wrong. Please try again.',
    data: response.data,
  };
};

const unwrapResponse = <T>(response: ApiResponse<T>): T => {
  if (response.ok) {
    return response.data as T;
  }

  throw createApiError(response);
};

const get = async <T>(
  url: string,
  params?: RequestParams,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apisauce.get<T>(url, params, config);
  return unwrapResponse(response);
};

const post = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apisauce.post<T>(url, data, config);
  return unwrapResponse(response);
};

const postFormData = async <T>(
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apisauce.post<T>(url, formData, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(config?.headers as RequestParams | undefined),
    },
  });

  return unwrapResponse(response);
};

const put = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apisauce.put<T>(url, data, config);
  return unwrapResponse(response);
};

const deleteRequest = async <T>(
  url: string,
  params?: RequestParams,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apisauce.delete<T>(url, params, config);
  return unwrapResponse(response);
};

export {apisauce, get, post, postFormData, put, deleteRequest};

export const api = {
  get,
  post,
  postFormData,
  put,
  delete: deleteRequest,
};
