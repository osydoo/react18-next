import react from 'react';
import Link from 'next/link';

export default function ClientComponent2() {
  return (
    <>
      <div>
        <Link className="link" href="/">
          <a>테스트 링크2</a>
        </Link>
        <style jsx>{`
          a {
            display: block;
          }
        `}</style>
      </div>
    </>
  );
}
