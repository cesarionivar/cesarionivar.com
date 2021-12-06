import { Meta } from '../components/Meta';
import { Projects } from '../components/Projects';

import data from '../utils/data';

const Portfolio = ({ projects }) => {
  return (
    <>
      <Meta title='Portfolio | Cesario Nivar' />

      <div className='works'>
        <h2 className='page__title'>Portfolio</h2>
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const projects = data.projects;

  return {
    props: {
      projects,
    },
  };
};
