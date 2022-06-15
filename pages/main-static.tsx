import react, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '../components/loading';

const ClientComponent2 = dynamic(
  () => import('../components/clientComponent2.client'),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

const ClientComponent = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('../components/clientComponent');
});

// import ClientComponent from '../../components/clientComponent';

export default function mainPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ClientComponent2 />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ClientComponent />
      </Suspense>
    </>
  );
}
