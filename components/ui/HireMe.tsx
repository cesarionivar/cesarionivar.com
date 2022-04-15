import Link from 'next/link';

export const HireMe = () => {
  return (
    <div className='hireMe'>
      <div className='hireMe__logo'>
        <img src='/img/hireMe.svg' alt='Hire Me' />
      </div>
      <div className='hireMe__info'>
        <p>
          If you want to build a website for your business or even for your
          personal use, such as a blog, don&apos;t wait to long... and contact
          me ✔
        </p>
        <Link href='/contact'>Get in touch! 📝</Link>
      </div>
    </div>
  );
};
