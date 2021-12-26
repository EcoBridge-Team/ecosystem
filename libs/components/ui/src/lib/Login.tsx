import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useStore } from '../hooks/useStore';
import { IAppState } from '../types/IAppState';
import router from 'next/router';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const loginSelector = (state: IAppState) => state.login;

export function Login() {
  const login = useStore(loginSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => {
    login(data.email, data.password)
      .then(() => {
        alert('Inicio de sesión exitoso.');
        router.push('/');
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

  /*  const mostrarMensaje = () => {
    return (
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{mensaje}</p>
      </div>
    );
  }; */

  return (
    <div className="min-h-screen flex items-center justify-center bg-box bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/ecobridge.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/">
              <a className="font-medium text-green-600 hover:text-green-700">
                access as guest to the platform
              </a>
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register('email')}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register('password')}
              />
            </div>
            {errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{errors.password?.message}</p>
              </div>
            ) : null}
            {errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{errors.email?.message}</p>
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-700"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
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
              Sign in
            </button>
          </div>
        </form>
        <div className="flex w-full justify-center">
          <svg
            width="30"
            height="17"
            viewBox="0 0 30 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8976 12.6C28.2476 12.3 28.5476 12.1792 28.7976 12.2375C29.0476 12.2958 29.1726 12.55 29.1726 13C29.1726 13.15 29.1434 13.2958 29.0851 13.4375C29.0267 13.5792 28.9559 13.7042 28.8726 13.8125C28.7892 13.9208 28.6726 14.0417 28.5226 14.175C28.3726 14.3083 28.2559 14.4083 28.1726 14.475C28.0892 14.5417 27.9601 14.6333 27.7851 14.75C27.6101 14.8667 27.5059 14.9417 27.4726 14.975C27.0892 15.2417 26.7059 15.4583 26.3226 15.625C26.3059 15.6417 26.2642 15.6667 26.1976 15.7C26.1642 15.7833 26.0976 15.85 25.9976 15.9C25.9142 15.95 25.7809 16 25.5976 16.05C25.2309 16.25 24.7059 16.3875 24.0226 16.4625C23.3392 16.5375 22.7101 16.5583 22.1351 16.525C21.5601 16.4917 21.1892 16.425 21.0226 16.325C20.8226 16.1917 20.6017 15.8583 20.3601 15.325C20.1184 14.7917 19.9642 14.375 19.8976 14.075C19.7976 13.625 19.7642 13.125 19.7976 12.575C19.8309 12.0583 19.9142 11.2083 20.0476 10.025V9.675C20.0476 9.59167 20.0184 9.53333 19.9601 9.5C19.9017 9.46667 19.8309 9.44167 19.7476 9.425C19.6476 9.40833 19.5226 9.4 19.3726 9.4C19.1392 9.4 18.8184 9.34167 18.4101 9.225C18.0017 9.10833 17.6892 9.05 17.4726 9.05C17.4726 9.05 17.4601 9.08333 17.4351 9.15C17.4101 9.21667 17.3809 9.30833 17.3476 9.425L17.2976 9.45C17.0476 10 16.7809 10.5042 16.4976 10.9625C16.2142 11.4208 15.9434 11.8 15.6851 12.1C15.4267 12.4 15.1726 12.6625 14.9226 12.8875C14.6726 13.1125 14.4517 13.2875 14.2601 13.4125C14.0684 13.5375 13.8976 13.6375 13.7476 13.7125C13.5976 13.7875 13.4809 13.8333 13.3976 13.85L13.2726 13.875C13.1226 13.9583 12.9892 14 12.8726 14C12.3892 14.0333 11.9142 13.8417 11.4476 13.425C11.3476 13.325 11.2309 13.1583 11.0976 12.925L11.0226 12.8C10.8892 12.5667 10.7559 12.4208 10.6226 12.3625C10.4892 12.3042 10.3309 12.3167 10.1476 12.4C9.91423 12.5333 9.64756 12.925 9.34756 13.575C9.18089 13.9083 9.05589 14.1417 8.97256 14.275C8.67256 14.725 8.40589 14.9833 8.17256 15.05C7.87256 15.1833 7.48089 15.4083 6.99756 15.725C6.38089 16.0917 5.79756 16.2833 5.24756 16.3C4.61423 16.3667 4.15589 16.4417 3.87256 16.525C3.77256 16.5417 3.68089 16.55 3.59756 16.55C3.43089 16.55 3.28089 16.5167 3.14756 16.45C2.96423 16.3667 2.68923 16.15 2.32256 15.8C1.92256 15.4333 1.65173 15.1083 1.51006 14.825C1.36839 14.5417 1.22256 14.0417 1.07256 13.325C0.839225 12.175 0.780892 11.25 0.897559 10.55C1.01423 9.85 1.37256 9.03333 1.97256 8.1C2.68923 6.91667 3.38089 6.06667 4.04756 5.55C4.71423 5.01667 5.53089 4.63333 6.49756 4.4C6.94756 4.31667 7.34756 4.15 7.69756 3.9C8.28089 3.53333 8.78089 3.39167 9.19756 3.475C9.61423 3.55833 10.0976 3.89167 10.6476 4.475C10.9309 4.79167 11.1392 5.05 11.2726 5.25C11.4059 5.43333 11.4976 5.61667 11.5476 5.8C11.5976 5.98333 11.6226 6.24167 11.6226 6.575C11.6226 8.00833 11.6642 9.11667 11.7476 9.9C11.7809 10.2167 11.8559 10.4958 11.9726 10.7375C12.0892 10.9792 12.2142 11.1667 12.3476 11.3C12.4809 11.4333 12.6892 11.6167 12.9726 11.85L13.0226 11.825C13.3059 11.625 13.5226 11.475 13.6726 11.375C13.7559 11.3083 13.8559 11.2417 13.9726 11.175C14.2226 10.9583 14.4642 10.6417 14.6976 10.225L14.7101 10.1875L14.7226 10.15V10.125C14.9392 9.50833 15.2476 8.68333 15.6476 7.65C15.6809 7.55 15.7601 7.34583 15.8851 7.0375C16.0101 6.72917 16.0934 6.5125 16.1351 6.3875C16.1767 6.2625 16.2476 6.06667 16.3476 5.8C16.4476 5.53333 16.5184 5.31667 16.5601 5.15C16.6017 4.98333 16.6517 4.77917 16.7101 4.5375C16.7684 4.29583 16.8101 4.06667 16.8351 3.85C16.8601 3.63333 16.8726 3.41667 16.8726 3.2C16.8726 2.93333 17.0309 2.46667 17.3476 1.8C17.6642 1.15 17.9142 0.749999 18.0976 0.599999C18.3476 0.45 18.6809 0.395833 19.0976 0.4375C19.5142 0.479167 19.7976 0.583333 19.9476 0.75C20.1309 0.983333 20.1309 1.91667 19.9476 3.55C19.7976 4.6 19.7309 5.29167 19.7476 5.625C19.7642 5.94167 19.8476 6.19167 19.9976 6.375C20.1976 6.55833 20.3642 6.64167 20.4976 6.625C20.6309 6.60833 20.8892 6.48333 21.2726 6.25C21.8392 5.91667 22.2476 5.75417 22.4976 5.7625C22.7476 5.77083 22.9892 5.95833 23.2226 6.325C23.3892 6.59167 23.4642 6.825 23.4476 7.025C23.4309 7.225 23.3142 7.625 23.0976 8.225C22.7976 9.09167 22.5226 10.075 22.2726 11.175C22.0892 12.025 22.0309 12.6625 22.0976 13.0875C22.1642 13.5125 22.4142 14.0083 22.8476 14.575C23.0309 14.8417 23.1726 14.9917 23.2726 15.025C23.3226 15.0417 23.4059 15.0333 23.5226 15C23.6392 14.9667 23.7642 14.9208 23.8976 14.8625C24.0309 14.8042 24.1142 14.7667 24.1476 14.75C24.6309 14.6167 24.9476 14.5083 25.0976 14.425C26.2976 13.775 27.2309 13.1667 27.8976 12.6ZM8.54756 10.575C8.61423 10.225 8.61423 9.96667 8.54756 9.8C8.46423 9.63333 8.25589 9.38333 7.92256 9.05C7.40589 8.53333 7.14756 8.10833 7.14756 7.775C7.14756 7.55833 7.07256 7.29167 6.92256 6.975C6.77256 6.675 6.62256 6.475 6.47256 6.375C6.37256 6.29167 6.28089 6.25 6.19756 6.25C6.13089 6.25 6.07256 6.26667 6.02256 6.3C5.85589 6.38333 5.53089 6.68333 5.04756 7.2C4.61423 7.63333 4.20589 8.18333 3.82256 8.85C3.45589 9.53333 3.18089 10.1667 2.99756 10.75C2.83089 11.3333 2.79756 11.75 2.89756 12C3.03089 12.2167 3.10589 12.6167 3.12256 13.2C3.15589 13.65 3.21423 13.975 3.29756 14.175C3.38089 14.3583 3.50589 14.4833 3.67256 14.55C3.83923 14.6167 4.12256 14.65 4.52256 14.65C4.72256 14.65 4.88923 14.65 5.02256 14.65C5.13923 14.6333 5.25589 14.6125 5.37256 14.5875C5.48923 14.5625 5.59756 14.5167 5.69756 14.45C5.81423 14.3833 5.92256 14.3167 6.02256 14.25C6.13923 14.1667 6.28089 14.0583 6.44756 13.925C7.04756 13.4417 7.38923 13.0583 7.47256 12.775C7.55589 12.475 7.74756 12.15 8.04756 11.8C8.31423 11.5333 8.48089 11.125 8.54756 10.575ZM9.17256 7.65C9.22256 7.53333 9.24756 7.275 9.24756 6.875C9.24756 6.25833 9.18923 5.91667 9.07256 5.85C9.02256 5.88333 8.98923 5.91667 8.97256 5.95C8.88923 6.1 8.88923 6.43333 8.97256 6.95C9.03923 7.31667 9.10589 7.55 9.17256 7.65Z"
              fill="#328257"
            />
          </svg>
        </div>
        <Link href="/register">
          <button
            type="submit"
            className="transition duration-500 ease-out group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-600 bg-white shadow-md hover:shadow-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-green-700 group-hover:text-green-600"
                aria-hidden="true"
              />
            </span>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
