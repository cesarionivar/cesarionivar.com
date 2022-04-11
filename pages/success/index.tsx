import Link from 'next/link';
import { Meta } from '../../components/layout';

const success = () => {
  return (
    <>
      <Meta title='Success Message | Cesario Nivar' />

      <div className='success'>
        <img src='/img/received.png' alt='Message Received' />
        <h2>Your message has been received successfully!!!</h2>
        <Link href='/'>
          <a className='btn-back'>
            Return home &nbsp;<i className='fas fa-home'></i>
          </a>
        </Link>
      </div>
    </>
  );
};

export default success;
