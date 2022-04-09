export const Footer: React.VFC = () => {
  return (
    <div className='footer'>
      <div className='footer__sociales'>
        <a
          href='https://github.com/cesarionivar'
          target='__blank'
          rel='noreferer'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.twitter.com/cesarionivar'
          target='__blank'
          rel='noreferer'
        >
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/cesarionivar/'
          target='__blank'
          rel='noreferer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <p className='footer__info'>
        Made with <i className='fas fa-heart'></i> and React{' '}
        <i className='fab fa-react'></i>
      </p>
      <p className='footer__place'>By Cesario Nivar in Santo Domingo</p>
    </div>
  );
};
