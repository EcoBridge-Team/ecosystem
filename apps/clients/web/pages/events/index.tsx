import { events_card_responsive } from '../../utils/constants';
import data from '../../data/events.dummy.json';
import {
  Layout,
  CardCarousel,
  Event,
  Header,
  Footer,
} from '@ecosystem/components/ui';

export default function Events(): JSX.Element {
  return (
    <Layout>
      <Header title="Connecting people and their resources." />
      <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-5">
        Events
      </h2>
      <p className="text-green-600 text-md text-justify font-medium px-10 xl:px-5">
        Here you will find some events organized by the community and companies
        that promotes sustainability. 🌲📅🧘‍♂️{' '}
      </p>
      <div className="w-full px-5 pt-6 overflow-y-auto">
        <div className="mb-3">
          <h2 className="w-full text-2xl md:text-4xl text-center md:text-left font-extrabold text-green-600 my-2">
            Today
          </h2>
          <p className="text-sm text-gray-500 uppercase font-bold">
            {new Date().toDateString().length > 10
              ? new Date().toDateString().slice(0, 10)
              : new Date().toDateString()}
          </p>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 bg-hero bg-cover"
          >
            <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-xl bg-green-600 text-white text-md py-1 pl-2 pr-3 leading-none">
                <i className="text-base align-middle"></i>{' '}
                <span className="align-middle">NEW</span>
              </div>
            </div>
            <div className="h-48"></div>
            <h2 className="text-white  text-2xl font-bold leading-tight mb-3 pr-5">
              Beach Cleaning Day in Costa del Este`s Manglar 🏖🧹♻
            </h2>
            <div className="flex w-full items-center text-sm text-gray-900 font-medium">
              <div className="flex-1 flex items-center">
                <div className="rounded-full w-8 h-8 mr-3 bg-alejandro bg-cover"></div>
                <div>👨🏽‍💻 Alejandro De León</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 18
              </div>
            </div>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 bg-pattern9 bg-cover"
          >
            <div className="h-48"></div>
            <h2 className="text-white  text-2xl font-bold leading-tight mb-3 pr-5">
              Recycling Day in Cinta Costera 📆♻🚀
            </h2>
            <div className="flex w-full items-center text-sm text-gray-900 font-medium">
              <div className="flex-1 flex items-center">
                <div className="rounded-full w-8 h-8 mr-3 bg-pattern2 bg-cover"></div>
                <div>♻ Bliss Circular Economy</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 7
              </div>
            </div>
          </a>
        </div>{' '}
      </div>
      <CardCarousel title="Upcoming Events" items={events_card_responsive}>
        {data.map((d, index) => (
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
      <Footer title="EcoBridge" />
    </Layout>
  );
}
