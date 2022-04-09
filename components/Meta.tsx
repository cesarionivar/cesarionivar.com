import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
}

export const Meta: React.VFC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <link rel='icon' href='/logo.png' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#f2f2f2' />
      <meta
        property='og:image'
        content='https://raw.githubusercontent.com/cesarionivar/public-resources-online/main/images/metatag.png'
      />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='theme-color' content='#f2f2f2' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#f2f2f2' />
      <meta name='msapplication-navbutton-color' content='#f2f2f2' />
      {/* <!-- Fonawesome --> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Cesario Nivar',
  description: 'Portfolio and personal website of engineer Cesario Nivar',
  keywords:
    'Cesario Nivar, Cesario, Cesario Nivar De Jesus, Nivar, Ingeniero de Sistemas, computer scince, Analista de datos, BI, Power BI, Bussiness Intelligence, Desarrollador, Developer, Ingeniero en sistemas y computacion, ingeniero en sistemas, Web Developer, Ingeniero Cesario Nivar, Ing. Cesario Nivar',
};
