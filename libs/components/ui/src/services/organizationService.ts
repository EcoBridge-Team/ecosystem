import axios from 'axios'
import { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const ORGANIZATION_API_URL = API_URL + '/organizations/'

interface AccessToken {
  access_token: string
  token_type: string
}

interface Organization {
  name: string
  description: string
  created_by: any
  created_at: string
  updated_at: string
  event_type: string
  location: any
  access_token?: AccessToken
}

interface OrganizationCreate {
  name: string
  description: string
  email: string
  event_type: string
  location: 'LocationPublic'
  price: number
  owner: 'UserPublic'
}

export const OrganizationService = {
  registerNewOrganization: (
    newOrganization: OrganizationCreate
  ): AxiosPromise<Organization> => {
    const payload = { new_Organization: newOrganization }
    return axios.post(ORGANIZATION_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getCurrentOrganization: (
    token: AccessToken | string
  ): AxiosPromise<Organization> => {
    let accessToken = 'Bearer '
    if (typeof token === 'object') accessToken += token.access_token
    else if (typeof token === 'string') accessToken += token

    return axios.get(ORGANIZATION_API_URL + 'event/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
  },
  getOrganizationByID: (id: string): AxiosPromise<Organization> => {
    return axios.get(ORGANIZATION_API_URL + `${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
