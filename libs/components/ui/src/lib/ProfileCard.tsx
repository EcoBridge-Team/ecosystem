import { useState } from 'react';
import { SolidIcon } from './SolidIcon';
import { OutlineIcon } from './OutlineIcon';
import { PieChart } from './PieChart';

interface ProfileCardProps {
  username: string;
  avatarUrl?: string;
  email: string;
  bio?: string;
  location: string;
  pieData: any[];
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  //const { name, price, rating_style, location, image, data } = props
  const [image, setImage] = useState('bg-teresa');

  return (
    <>
      <div className="bg-white w-auto rounded-md lg:h-64 flex flex-wrap xl:flex-nowrap flex-row xl:flex-row space-y-10 lg:space-y-0 lg:space-x-24 md:mx-10 my-10 justify-center">
        <div className="flex-col space-x-1 items-center justify-start w-72 h-auto">
          <div
            className={`${image} w-52 h-52 rounded-full self-center`}
            onClick={() => {
              if (image === 'bg-teresa') {
                setImage('bg-pattern1');
              } else if (image === 'bg-pattern1') {
                setImage('bg-pattern2');
              } else if (image === 'bg-pattern2') {
                setImage('bg-pattern3');
              } else if (image === 'bg-pattern3') {
                setImage('bg-pattern4');
              } else if (image === 'bg-pattern4') {
                setImage('bg-teresa');
              }
            }}
          />
          <div className="inline-flex mt-5">
            <p className="w-auto text-xl font-bold text-center text-green-600">
              Rating:
            </p>
            <SolidIcon icon={'StarIcon'} />
            <SolidIcon icon={'StarIcon'} />
            <SolidIcon icon={'StarIcon'} />
            <OutlineIcon icon={'StarIcon'} />
            <OutlineIcon icon={'StarIcon'} />
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-72 xl:w-auto h-auto self-center">
          <div className="inline-flex space-x-3 items-center justify-start">
            <p className="w-28 h-full text-xl font-bold text-green-600">
              Username:
            </p>
            <p className="w-64 h-full text-lg text-gray-800">
              {props.username}
            </p>
          </div>
          <div className="inline-flex space-x-1.5 items-center justify-start w-72 h-auto">
            <p className="w-20 h-full text-xl font-bold  text-green-600">
              Name:
            </p>
            <p className="w-36 h-full text-lg  text-gray-800">User</p>
          </div>
          <div className="inline-flex space-x-1.5 items-center justify-start w-72 h-auto">
            <p className="w-20 h-full text-xl font-bold  text-green-600">
              Email:
            </p>
            <p className="w-36 h-full text-lg  text-gray-800">{props.email}</p>
          </div>
          <div className="inline-flex space-x-1.5 items-center justify-start w-72 h-auto">
            <p className="w-28 h-full text-xl font-bold  text-green-600">
              Address:
            </p>
            <p className="w-64 h-full text-lg text-gray-800">
              Panamá City, Panamá
            </p>
          </div>
          <div className="inline-flex items-center justify-start w-72 h-auto">
            <p className="w-16 h-full text-xl font-bold  text-green-600">
              Role:
            </p>
            <p className="w-24 h-full text-lg  text-gray-800"></p>
          </div>
          <div className="inline-flex items-center justify-start w-72 h-auto">
            <p className="w-28 h-full text-xl font-bold  text-green-600">
              Shipping:
            </p>
            <p className="w-2/3 h-full text-lg text-gray-800">International</p>
          </div>
          <div className="inline-flex items-center justify-start w-72 h-auto">
            <p className="w-32 h-full text-xl font-bold  text-green-600">
              Sold Items:
            </p>
            <p className="w-12 h-full text-lg text-gray-800">10</p>
          </div>
        </div>
        <div className="self-center w-96">
          <PieChart data={props.pieData} />
        </div>
      </div>
      <div></div>
    </>
  );
};
