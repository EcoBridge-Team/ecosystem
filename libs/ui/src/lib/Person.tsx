/* import { LocationMarkerIcon } from '@heroicons/react/outline' */

const Person = (props): JSX.Element => {
  const { name, description, profile_pic, title } = props
  return (
    <figure className=" bg-gray-100 rounded-xl p-8 m-2 shadow-md hover:shadow-none transition duration-500">
      <div
        className={`${profile_pic} bg-cover w-32 h-32 rounded-full mx-auto`}
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold mb-5 xl:mx-10">{description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">{name}</div>
          <div className="text-gray-500">{title}</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Person
