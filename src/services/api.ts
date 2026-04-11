import {ApiResponse, ApisauceInstance, create} from 'apisauce';
import {Constants} from '../utils';
import {LoginResponse, EventsResponse} from '../utils/Types';
import {getGeneralApiProblem, GeneralApiProblem} from './apiProblem';

export class Api {
  apisauce: ApisauceInstance;

  constructor() {
    this.apisauce = create({
      baseURL: Constants.BASE_URL,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async login(
    email: string,
    password: string,
  ): Promise<{kind: 'ok'; response: LoginResponse} | GeneralApiProblem> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response: ApiResponse<LoginResponse> = await this.apisauce.post(
      '/login',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return {kind: 'ok', response: response.data!};
    } catch (e) {
      return {kind: 'bad-data'};
    }
  }

  async getEvents(
    token: string,
  ): Promise<{kind: 'ok'; response: EventsResponse} | GeneralApiProblem> {
    const response: ApiResponse<EventsResponse> = await this.apisauce.post(
      '/events-listing',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return {kind: 'ok', response: response.data!};
    } catch (e) {
      return {kind: 'bad-data'};
    }
  }
}

export const api = new Api();
