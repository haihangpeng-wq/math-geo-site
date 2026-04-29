import React from 'react';
import Layout from '@theme-original/Layout';
import ContactModal from '@site/src/components/ContactModal';

export default function LayoutWrapper(props: any) {
  return (
    <>
      <ContactModal />
      <Layout {...props} />
    </>
  );
}
