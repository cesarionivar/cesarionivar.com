import { Meta } from '../components/layout';
import { Banner, Resume, HireMe } from '../components/ui';

export default function Home() {
  return (
    <>
      <div className='landing page'>
        <Meta />

        <Banner />
        <Resume />
        <HireMe />
      </div>
    </>
  );
}
