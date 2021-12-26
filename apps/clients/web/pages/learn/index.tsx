import data from '../../data/videos.dummy.json';
import { videos_card_responsive } from '../../utils/constants';
import {
  Layout,
  ImageRec,
  Video,
  CardCarousel,
  Button,
  Footer,
  Header,
} from '@ecosystem/components/ui';

export default function Learn(): JSX.Element {
  return (
    <Layout>
      <Header title="Welcome to our Learning Platform." />
      <div className="xl:grid xl:grid-cols-5 xl:gap-5">
        <div
          className="w-full
        xl:col-span-2"
        >
          <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
            Learning Platform
          </h2>
          <p className="text-green-600 text-md text-justify font-medium px-10 xl:px-2">
            Here you will find some of our services like the map that helps you
            know where are the recycling centers, how to correctly store and
            clean materials, and other useful information specially tailored for
            your needs. ⚙🚀⚡{' '}
          </p>
          <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
            Videos
          </h2>
          <p className="text-green-600 text-md text-justify font-medium py-2 px-10 xl:px-2">
            Here you will find a list of videos we feel you`ll like to see.
            Scroll to see all of them. 😃📚♻{' '}
          </p>
          <CardCarousel items={videos_card_responsive}>
            {data.map((d, index) => (
              <Video
                key={index}
                embedUrl={d.embedUrl}
                height="aspect-h-9"
                width="aspect-w-16"
              />
            ))}
          </CardCarousel>
        </div>
        <div className="col-span-3">
          <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
            Recycling Centers
          </h2>
          <p className="text-green-600 text-md text-justify font-medium px-10 xl:px-2">
            Find recycling centers that fit better your needs! 🌎🏭♻{' '}
          </p>
          <div className="fill-available">
            <input
              type="search"
              className="border-none rounded-md shadow w-64 xl:w-6/12 p-2 mx-3 my-5"
              placeholder="What do you want to recycle?"
            />
            <Button text="Search" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d106030.25899817294!2d-79.56964343971546!3d9.029690657219254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling!5e0!3m2!1ses!2spa!4v1627077800862!5m2!1ses!2spa"
            width="100%"
            height="500"
            className="xl:rounded-xl border-0 lg:mr-10 lg:mb-5"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="col-start-0 xl:col-span-5 xl:ml-5">
          <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
            Search your Material
          </h2>
          <p className="text-green-600 text-md text-justify font-medium px-10 xl:px-2">
            Get to know better your materials by searching or uploading a
            picture.🔎🌲♻{' '}
          </p>
          <div className="xl:col-span-5 mb-5">
            <ImageRec />
          </div>
        </div>
      </div>
      <Footer title="EcoBridge" />
    </Layout>
  );
}
