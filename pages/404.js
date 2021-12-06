import Link from 'next/link';
import { Meta } from '../components/Meta';

const Custom404 = () => {
  return (
    <>
      <Meta title='404 - Cesario Nivar' />

      <div className='noMatch'>
        <img src='/img/NoMatch.png' alt='No Match' />
        <h2>Error 404, resource not found!!!</h2>
        <Link href='/'>
          <a className='btn-back'>
            Go back &nbsp;<i className='fas fa-undo'></i>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
