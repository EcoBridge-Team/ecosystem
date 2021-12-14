import {
  LocationMarkerIcon,
  ClockIcon,
  UserIcon,
} from '@heroicons/react/outline'
import Button from './Button'

interface EventProps {
  name: string
  description: string
  location: string
  image: string
  startTime: string
}

const Event = (props: EventProps): JSX.Element => {
  return (
    <div className=" bg-white shadow-md hover:shadow-none focus:shadow-inner focus:bg-white transition duration-500 rounded-xl p-4 mx-2 my-3">
      <div className="flex-none lg:flex">
        <div className=" h-full w-full lg:w-48 lg:mb-0">
          <img
            src={props.image}
            alt="Just a flower"
            className="w-full object-scale-down lg:object-cover rounded-2xl"
          />
        </div>
        <div className="flex-auto ml-3 justify-evenly py-2">
          <div className="flex flex-wrap">
            <div className="w-full flex-none text-sm text-green-700 font-medium ">
              Event
            </div>
            <h2 className="flex-auto text-lg xl:text-xl font-bold">
              {props.name}
            </h2>
          </div>
          <p className="text-xs mt-3">{props.description}</p>

          <p className="mt-3"></p>
          <div className="flex py-4  text-sm text-gray-500">
            <div className="flex-1 inline-flex items-center">
              <LocationMarkerIcon className="h-5 w-5 mr-3" />

              <p className="text-xs">{props.location}</p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <ClockIcon className="h-5 w-5 mr-3" />

              <p className="text-xs">{props.startTime}</p>
            </div>
          </div>

          <div className="flex p-4 pb-2 border-t border-gray-200"></div>
          <div className="flex space-x-3 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-md tracking-wider border text-gray-600 rounded-md hover:bg-gray-100 inline-flex items-center space-x-2 ">
                <span className="text-green-400 hover:text-green-500 rounded-sm">
                  <UserIcon className="h-5 w-5" />
                </span>
                <span>62 Atendees</span>
              </button>
            </div>
            <Button text="Schedule" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
