import axios from 'axios'
import { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const LOCATION_API_URL = API_URL + '/location/'

interface AccessToken {
  access_token: string
  token_type: string
}

interface Location {
  name: string
  description: string
  created_by: any
  created_at: string
  updated_at: string
  event_type: string
  location: any
  access_token?: AccessToken
}

interface LocationCreate {
  name: string
  description: string
  email: string
  event_type: string
  location: 'LocationPublic'
  price: number
  owner: 'UserPublic'
}

export const LocationService = {
  registerNewLocation: (
    newLocation: LocationCreate
  ): AxiosPromise<Location> => {
    const payload = { new_location: newLocation }
    return axios.post(LOCATION_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getCurrentLocation: (token: AccessToken | string): AxiosPromise<Location> => {
    let accessToken = 'Bearer '
    if (typeof token === 'object') accessToken += token.access_token
    else if (typeof token === 'string') accessToken += token

    return axios.get(LOCATION_API_URL + 'event/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
  },
  getLocationByID: (id: string): AxiosPromise<Location> => {
    return axios.get(LOCATION_API_URL + `${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
