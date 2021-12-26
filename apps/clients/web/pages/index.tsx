import {
  Layout,
  Header,
  CardCarousel,
  MaterialsChart,
  WordTrail,
  Item,
  Event,
  Heading,
  Button,
  Footer,
} from '@ecosystem/components/ui';

import Link from 'next/link';

import {
  items_card_responsive,
  events_card_responsive,
} from '../utils/constants';
import dataEvent from '../data/events.dummy.json';
import { useEffect, useState } from 'react';
import { IResource } from '../types/IResource';
import { resourceService } from '../services/resourceService';
import { getImageUrl } from '../services/imageService';

export const Home = (): JSX.Element => {
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    resourceService
      .getAllResources('dummy token')
      .then(({ data: res }) => setResources(res))
      .catch((err) => {
        alert('Error obteniendo resources');
        console.error(err);
      });
  }, []);

  return (
    <Layout>
      <Header
        title="Connecting people and their resources."
        //image="/public/images/main_header.png"
      />
      <div className="xl:grid grid-flow-col xl:grid-cols-3 gap-2">
        <div className="px-5 w-full flex flex-col md:flex-row xl:flex-col self-center items-center">
          <div className="md:w-5/6">
            <WordTrail />
          </div>
          <div className=" mt-5 xl:mt-2 items-center">
            <p className="text-green-600 text-md text-justify font-medium px-5 xl:px-10 my-1">
              We are a community where people can sell, exchange or trade their
              resources in order to promote green consumption and reduce waste.{' '}
            </p>
            <Link href="/about-us" passHref>
              <div className="xl:mx-10 xl:m-3 text-right">
                <Button text="Read our pledge here" />
              </div>
            </Link>
          </div>
        </div>

        {/* espacio para lo de la grafica en el diseño */}
        <div className="row-start-1 col-start-2 col-span-2 overflow-x-scroll md:overflow-hidden">
          <MaterialsChart />
        </div>
      </div>

      <CardCarousel title="Resources Near You" items={items_card_responsive}>
        {resources.map((r) => (
          <Item
            key={r.id}
            name={r.name}
            price={`$${r.price.toFixed(2)}`}
            rating_style="bg-green-600"
            location={r.country.replace(/^\w/, (c) => c.toUpperCase())}
            image={
              r.images?.[0] ? getImageUrl(r.images[0].image_id) : undefined
            }
          />
        ))}
      </CardCarousel>

      <CardCarousel title="Upcoming Events" items={events_card_responsive}>
        {dataEvent.map((d, index) => (
          <Event
            key={index}
            name={d.name}
            startTime={d.date}
            location={d.location}
            description={d.description}
            image={d.image}
          />
        ))}
      </CardCarousel>

      {/* <CardCarousel title="Videos" /> */}
      <Heading />
      <Footer title="EcoBridge" />
    </Layout>
  );
};

export default Home;
