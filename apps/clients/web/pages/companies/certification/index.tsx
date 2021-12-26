import { Layout, Footer } from '@ecosystem/components/ui';

import Image from 'next/image';

export default function OpenData(): JSX.Element {
  return (
    <Layout>
      <div>
        <h2 className="w-5 text-4xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-5 mt-5">
          Certifications
        </h2>
        <div className="grid grid-rows-4 grid-flow-col gap-4 w-full h-full">
          <div className="row-span-3">
            <div className="w-full h-full bg-gray-50 rounded-xl">
              <div className="w-full flex flex-col items-center justify-center">
                {/* {data.length > 0 && <h2 className="text-2xl mb-4">Recent Images</h2>}
        {data.length > 0 && (
            <CardCarousel items={certifications_card_responsive}  >
              {data.map((data, index) => {
                return (
                  <div className="recentPrediction" key={`${data.image}${index}`}>
                    <img
                      src={data.image}
                      alt="Recent Prediction"
                      className="block h-full xl:h-56 object-cover rounded-xl mb-2 shadow hover:shadow-none"
                    />
                  </div>
                )
              })}
            </CardCarousel>


            )} */}
              </div>
            </div>
          </div>
          <div className="col-span-4">2</div>
          <div className="row-span-3 col-span-3 flex items-center justify-center">
            <div className=" m-0">
              <h2 className="text-2xl md:text-3xl text-center font-extrabold text-green-600 mb-4 md:ml-5">
                Last Certification
              </h2>
              <Image
                src="/images/certify.png"
                alt="Open Data Certification"
                width={1071}
                height={720}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer title="EcoBridge" />
    </Layout>
  );
}
