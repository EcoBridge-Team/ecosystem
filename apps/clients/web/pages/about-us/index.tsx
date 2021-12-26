import Link from 'next/link';
import {
  Layout,
  Header,
  Person,
  Video,
  Button,
} from '@ecosystem/components/ui';

export default function Events(): JSX.Element {
  return (
    <Layout>
      <Header title="Connecting people and their resources." />
      <div className="flex flex-col xl:flex-row my-5">
        <div className="w-full xl:w-2/3">
          <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
            Our Pledge
          </h2>
          <p className="md:w-auto text-sm md:text-base text-justify font-medium text-gray-800 my-4 mx-5">
            Ecobridge is a platform that connects collectors of recyclable
            material with consumers looking for recycled material to make their
            products. Thus allowing a market for recyclable material to be
            created, contributing to the decrease in the use of natural
            resources, producing less impact on the planet. By joining these two
            users we facilitate the search for both by increasing the demand for
            these materials and possibly lowering the cost of them. At the same
            time, through the platform, it seeks to provide relevant and
            educational information on the benefits of consuming sustainable
            products, reducing excessive consumption, repairability, as well as
            measuring and showing the level of sustainability of each material.
          </p>{' '}
          <Link href="/about-us/open-data/">
            <a>
              <Button text="Access our Open Data" />
            </a>
          </Link>
        </div>
        <div className="w-full xl:w-9/12 xl:ml-5 xl:mx-10 xl:my-24">
          <Video
            embedUrl="5d7UXzqnTlg"
            height="aspect-h-9"
            width="aspect-w-16"
          />
        </div>
      </div>

      <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-4 md:ml-3">
        About Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center">
        <div className="justify-self-center">
          <Person
            name="Alejandro De León"
            description="Leader of the project and a student of Software Engineering at Technological University of Panama, interested in Design, Sustainability and Data Science. He had developed software for different NGOs and continues to do that."
            profile_pic="bg-alejandro"
            title="Full Stack Developer, Designer"
          />
        </div>
        <div className="mx-0">
          <Person
            name="Michael Knight"
            description="Software Engineering student passionate about technology and software development."
            profile_pic="bg-michael"
            title="Backend Developer"
          />
        </div>
        <div className="mx-0">
          <Person
            name="Alek Rutherford"
            description="Software Engineering student passionate about technology and oriented to the development of web applications. I focus on developing ideas for the development of our society."
            profile_pic="bg-alek"
            title="Fullstack Developer"
          />
        </div>
        <div className="mx-0">
          <Person
            name="Jose Regalado"
            description="Software engineering student passionate about designing the best user experience. Enjoy the fact of generating ideas that provide a benefit in society."
            profile_pic="bg-jose"
            title="Developer Operations"
          />
        </div>
        <div className="mx-0">
          <Person
            name="Arístides Isaza"
            description="Final year software engineering student interested in generating ideas for the environment. Professionally I work as an automation tester and I seek to specialize in Java development."
            profile_pic="bg-aristides"
            title="Tester"
          />
        </div>
      </div>
    </Layout>
  );
}
