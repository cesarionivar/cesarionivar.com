export const Banner = () => {
  return (
    <div>
      <div className='banner'>
        <img src='/img/greet.png' alt='Welcome' className='welcome-img' />
        <br />
        <h2 className='title'>{`< I'm a Software Developer />`}</h2>
        <p className='description'>
          Passionate about technologies and especially into programming 👨🏽‍💻.
        </p>
      </div>
      <div className='hero'>
        <img src='/img/hero.svg' alt='Hero' className='hero-img' />
      </div>
      <div className='intro'>
        <p>Hey there!, it&apos;s a pleasure to meet you.</p>
        <p>“Simplicity is the soul of efficiency.” – Austin Freeman</p>
      </div>
    </div>
  );
};
