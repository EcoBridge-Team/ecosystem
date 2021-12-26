import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
}

export function Card(props: CardProps) {
  return (
    <button className="py-8 px-0 lg:py-20 lg:px-0 bg-white w-auto rounded-xl shadow-md hover:shadow-none hover:bg-gray-100 focus:shadow-inner focus:bg-gray-200 transition duration-500">
      <Image src={props.image} alt={props.title} width="800" height="500" />
      <div className="mt-5">
        <h3 className="card-title font-bold text-xl xl:text-3xl text-green-700">
          {props.title}
        </h3>
      </div>
    </button>
  );
}
