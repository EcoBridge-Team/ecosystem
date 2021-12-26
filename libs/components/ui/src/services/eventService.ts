import axios from 'axios'
import { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const EVENTS_API_URL = API_URL + '/events/'

interface AccessToken {
  access_token: string
  token_type: string
}

interface Events {
  name: string
  description: string
  created_by: any
  created_at: string
  updated_at: string
  event_type: string
  location: any
  access_token?: AccessToken
}

interface EventsCreate {
  name: string
  description: string
  email: string
  event_type: string
  location: 'LocationPublic'
  price: number
  owner: 'UserPublic'
}

export const EventsService = {
  registerNewEvent: (newEvent: EventsCreate): AxiosPromise<Events> => {
    const payload = { new_events: newEvent }
    return axios.post(EVENTS_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getCurrentEvent: (token: AccessToken | string): AxiosPromise<Events> => {
    let accessToken = 'Bearer '
    if (typeof token === 'object') accessToken += token.access_token
    else if (typeof token === 'string') accessToken += token

    return axios.get(EVENTS_API_URL + 'event/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
  },
  getEventsByID: (id: string): AxiosPromise<Events> => {
    return axios.get(EVENTS_API_URL + `${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
