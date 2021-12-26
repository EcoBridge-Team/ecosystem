//import data from '../../data/resources.dummy.json'
import { Layout, EditProfile, Header, Footer } from '@ecosystem/components/ui';

export default function EditUser(): JSX.Element {
  return (
    <div>
      <Layout>
        <Header title="Teresa Fisher" />
        <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 my-5 md:ml-3">
          Edit Profile
        </h2>
        <EditProfile /* name="Alejandro" value="Alejandro" image="Alejandro" */
        />
        <Footer title="EcoBridge" />
      </Layout>{' '}
    </div>
  );
}
