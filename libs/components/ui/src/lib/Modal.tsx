//import Link from 'next/link'
import { Button } from './Button';
import { Logo } from './Logo';

interface ModalProps {
  title: string;
  description: string;
}

export function Modal(props: ModalProps) {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        {/*content*/}
        <div className="">
          {/*body*/}
          <div className="text-center p-5 flex-auto justify-center">
            <Logo height="h-12" />
            <h2 className="text-xl font-bold py-4 text-gray-800">
              {props.title}
            </h2>
            <p className="text-sm text-gray-600 px-8">{props.description}</p>
          </div>
          {/*footer*/}
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <Button text="Thanks" />
          </div>
        </div>
      </div>
    </div>
  );
}
