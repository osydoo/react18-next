import react, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '../components/loading';

const ClientComponent2 = dynamic(
  () => import('../components/clientComponent2'),
  {
    loading: ({ error, isLoading, pastDelay }) => <Spinner />,
    suspense: false,
    ssr: false,
  },
);

// suspense 테스트 : main-ssr페이지에서 새로고침
// suspense : false - 따로 안가져옴
// suspense : true - 따로 가져옴

// ssr 테스트 : 루트에서 main-ssr로 이동(a태그로 이동)
// ssr: true, suspense: false : 미리 테스트링크 2가 그려져서 옴 - 단 lazyloading 미작동
// ssr: true, suspense: true : 미리 테스트링크 2가 그려져서 옴 - 단 lazyloading 작동
// srr: false, suspense: true - 에러 발생
// ssr: false, suspense: false - lazyloading 작동...? isServerSide값이 다른곳에서 어떻게 설정되는지를 몰라서 이에 대한 연구가 필요해보임

// const ClientComponent = lazy(async () => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return import('../components/clientComponent');
// });

import ClientComponent from '../components/clientComponent';

// 상단과 하단을 통해 레이지된것과 안된것 차이점을 볼 수 있다.

export default function mainPage() {
  return (
    <>
      <ClientComponent2 />
      <Suspense fallback={<Spinner />}>
        <ClientComponent />
      </Suspense>
    </>
  );
}
