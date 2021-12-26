import axios from 'axios';
import { AxiosPromise } from 'axios';
import { IResourceCreate, IResource } from '../types/IResource';
import { IAccessToken } from '../types/IUser';
import { getTokenString } from '../utils/token';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const RESOURCES_API_URL = API_URL + '/resources/';

export const resourceService = {
  registerNewResource: (
    newResource: IResourceCreate,
    token: IAccessToken | string
  ): AxiosPromise<IResource> => {
    const accessToken = getTokenString(token);

    const payload = newResource;
    return axios.post(RESOURCES_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });
  },

  getAllResources: (
    token: IAccessToken | string
  ): AxiosPromise<IResource[]> => {
    const accessToken = getTokenString(token);

    return axios.get(RESOURCES_API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });
  },

  getResource: (token: IAccessToken | string): AxiosPromise<IResource> => {
    const accessToken = getTokenString(token);

    return axios.get(RESOURCES_API_URL + 'resource/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });
  },

  getResourceByID: (id: string): AxiosPromise<IResource> => {
    return axios.get(RESOURCES_API_URL + `${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
