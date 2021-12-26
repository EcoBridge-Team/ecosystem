import { items_card_responsive } from '../../utils/constants';
import data from '../../data/resources.dummy.json';
import {
  Layout,
  Button,
  ProfileCard,
  CardCarousel,
  Item,
  Header,
} from '@ecosystem/components/ui';

import dataPie from '../../data/piechart.dummy.json';
import { IAppState } from '../../types/IAppState';
import { useStore } from '../../hooks/useStore';
import Link from 'next/link';

const userSelector = (state: IAppState) => state.user;

export default function Profile(): JSX.Element {
  const user = useStore(userSelector);

  return (
    <div>
      <Layout>
        <Header title="Teresa Fisher" />
        <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
          My Profile
        </h2>
        <div className="grid lg:grid-flow-col">
          {user && (
            <ProfileCard
              username={user.username}
              email={user.email}
              location={user.bio}
              pieData={dataPie}
            />
          )}
          <div className="items-center flex flex-col space-y-4 xl:space-y-6 self-center xl:items-center xl:mx-14">
            <div className="w-auto">
              <Link href="/profile/editprofile" passHref>
                <a>
                  <Button text="EDIT PROFILE" />
                </a>
              </Link>
            </div>
            <div className="w-auto">
              <Link href="/about-us" passHref>
                <Button text="SETTINGS" />
              </Link>
            </div>
            <div className="w-auto">
              <Link href="/about-us" passHref>
                <Button text="CHANGE PASSWORD" />
              </Link>
            </div>
          </div>
        </div>
        <CardCarousel title="Your Items" items={items_card_responsive}>
          {data.map((d, index) => (
            <Item
              key={index}
              name={d.name}
              price="$200.00"
              rating_style={d.rt_color}
              location="Panama City, Panama"
              image={d.img}
            />
          ))}
        </CardCarousel>
      </Layout>{' '}
    </div>
  );
}
