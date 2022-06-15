import react, { useEffect, useState } from 'react';
import Link from 'next/link';
export default function ClientComponent() {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <>
      <div>
        {isLoad && (
          <Link className="link" href="/">
            <a> 링크</a>
          </Link>
        )}

        <style jsx>{`
          a {
            display: block;
          }
        `}</style>
      </div>
    </>
  );
}
