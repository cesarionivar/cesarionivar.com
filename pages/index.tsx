import { Banner } from '../components/Banner';
import { HireMe } from '../components/HireMe';
import { Meta } from '../components/Meta';
import { Resume } from '../components/Resume';

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
