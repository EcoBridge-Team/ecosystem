import Image from 'next/image';
import zeroWaste from '../../public/images/zerowasteverified.svg';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useStore } from '../../hooks/useStore';
import { IAppState } from '../../types/IAppState';
import Link from 'next/link';
import { Layout, Video, Footer, Organization } from '@ecosystem/components/ui';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
const loginSelector = (state: IAppState) => state.login;

const features = [
  {
    name: 'Safe Market',
    description:
      'Buy and sell in marketplace with lots of recyclable resources at an affordable price or even free.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Only monthly acknowledge of the materials accquire in the platform is required to be transparent to the community.',
    icon: ScaleIcon,
  },
  {
    name: 'Enter our Materials API',
    description:
      'Access to an API of materials with useful information to better understand each resource and how to treat it.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Grow a community',
    description:
      'Organize events to promote recycling and other activities and spread the word in the community.',
    icon: AnnotationIcon,
  },
];

/*
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLFsfg2xP7cbLuAglQob6zjS4nVbyAfSVV&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
} */

export default function Companies(): JSX.Element {
  const login = useStore(loginSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => {
    // userService
    //   .login(data.email, data.password)
    login(data.email, data.password)
      .then(() => {
        alert('Solicitud enviada exitosamente.');
      })
      .catch((err) => {
        let msg = '';
        if (err.response) {
          if (err.response.status === 401) {
            msg = 'Correo y/o contraseña incorrecta.';
          } else {
            msg = `Error del servidor. ${err.toString()}`;
          }
        } else {
          msg = `Error del cliente. ${err.toString()}`;
        }
        alert(msg);
      });
  };

  return (
    <Layout>
      <h2 className="w-full text-4xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 xl:ml-5 mt-5">
        Companies
      </h2>

      <div className="w-full mb-5">
        <div className="text-center">
          <Image src={zeroWaste} />
          <div className="xl:mx-10 mb-10 flex flex-col xl:flex-row justify-center flex-wrap">
            <div className="w-full xl:w-8/12">
              <Video
                embedUrl="Ny-1WHis3_c"
                height="aspect-w-16"
                width="aspect-h-9"
              />
            </div>
            <div className="py-5 px-5 xl:px-20 fill-available">
              <div className="grid grid-flow-row xl:grid-cols-2">
                <p className="text-green-600 text-md text-justify m-5 font-medium">
                  We are a community where people can sell, exchange or trade
                  their resources in order to promote green consumption and
                  reduce waste. We evaluate company processes, use and give them
                  access to a database of materials where they can learn and
                  consult any type of material it’s cost in market and others
                  that could be useful for them.{' '}
                </p>
                <p className="text-green-600 text-md text-justify m-5 font-medium">
                  Increasing recyclable materials sources, reducing costs,
                  promoting reparability and help improve their processes with
                  more sustainable practices.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center lg:grid-cols-2"></div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Zero Waste Verified
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-800 sm:text-4xl">
              It’s all about Circular Economy.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With sustainability in mind we can develop a better future for
              everyone.
            </p>
          </div>
          <h2 className="w-full text-4xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-5 mt-5">
            Benefits
          </h2>
          <div className="mt-10 mb-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 w-9/12 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <h2 className="w-full text-4xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-5 mt-5">
        Join Our Program!
      </h2>
      <div className="grid grid-flow-row xl:grid-cols-2 mt-10 xl:mx-10 justify-center">
        <div className="flex-grow self-center justify-center">
          <Video
            embedUrl="Ny-1WHis3_c"
            height="aspect-w-16"
            width="aspect-h-9"
          />
        </div>
        <div className="flex-none">
          <div className="grid md:py-2 flex-col md:flex-row bg-white z-20 rounded-md w-full mt-20 xl:my-10">
            <div className="grid content-center mx-5 xl:ml-20 xl:mr-10">
              <div className="grid grid-flow-row justify-center gap-4 py-3">
                <p className="text-green-600 text-md text-justify font-semibold tracking-wide mx-5 my-3">
                  The following companies are Zero Waste Verified (ZWV) which
                  means that their use of resources, processes and manufacturing
                  is safe for ecosystem.{' '}
                </p>
                <div className="grid grid-flow-col gap-4 justify-center">
                  <Organization image="https://pbs.twimg.com/profile_images/1270513677259747328/htKdy4-o_400x400.jpg" />
                  <Organization image="data:image/png;base64,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" />
                  <Organization image="https://pbs.twimg.com/profile_images/1270513677259747328/htKdy4-o_400x400.jpg" />
                </div>
                <p className="text-green-600 text-md text-justify font-semibold tracking-wide mx-5 mt-5">
                  To find out more information about the program or if you are
                  interested in becoming a partner company please contact us.{' '}
                </p>
              </div>

              <div className="grid">
                <form
                  className="mx-7 space-y-6"
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        {...register('email')}
                      />
                    </div>
                    {errors.email ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{errors.email?.message}</p>
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <Link href="/companies/certification">
                      <button
                        type="submit"
                        className="transition duration-500 ease-out group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-md hover:shadow-none text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-green-700 transition duration-500 ease-out group-hover:text-green-400"
                            aria-hidden="true"
                          />
                        </span>
                        Submit
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer title="EcoBridge" />
    </Layout>
  );
}
