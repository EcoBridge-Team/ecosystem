import React from 'react';
//import Shipping from '../../../components/Shipping'
import { Layout, Modal } from '@ecosystem/components/ui';

export default function ShippingPage(): JSX.Element {
  //const [modal, setModal] = useState(null)

  return (
    <Layout>
      <Modal
        title="Thanks for your order."
        description="Thanks for making your order please check your confirmation in your email."
      />
    </Layout>
  );
}
