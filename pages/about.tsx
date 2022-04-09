import { Meta } from '../components/Meta';

const about = () => {
  return (
    <>
      <Meta title='About | Cesario Nivar' />

      <div className='about'>
        <h2 className='page__title'>About</h2>
        <div className='about__me'>
          <img src='/img/welcome.png' alt='Me' />

          <div className='about__details'>
            <p>
              Hello! My name is <b>Cesario Nivar</b>, I am a technology-loving,
              computer and systems engineer, I have experience and skills in web
              development (html, css, sass, javascript, webpack, react, node,
              php), sql (mariadb, mysql, sql server) and no-sql (mongodb,
              firestore) databases, and also in Data Analysis and Business
              Intelligence using tools such as Microsoft Excel and Power BI,
              visit the following link to vist part of the works that I had made
              in &nbsp;
              <a
                href='https://powerbicesarionivar.netlify.app/'
                target='_black'
                rel='noreferrer'
              >
                Power BI
              </a>
              .
            </p>
            <p>
              I am bilingual, I speak spanish and english fluently. I studied
              English when I was 13 years old, something that opened and
              continues to open many doors in my life into this beautiful world.
              At 17 years old, I decided to study computer and systems
              engineering at the Dominican O&amp;M University, which I graduated
              at 22 years old with honors.
            </p>
            <p>
              🕵 Everyday, I enjoy and love challenges, overcoming them
              motivates me to continue learning and makes me a better
              professional. 💖 I fall in love in programming every time,
              it&apos;s like a deja vu🥰 and I try to incorporate it in some way
              in everything that I do. 😎 Also, I have a lot of hobbies, such as
              traveling, listening to music, reading, ride bicycle, watching TV
              shows, drinking beer, and others.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
