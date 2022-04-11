import { Meta } from '../../components/layout';
import { Projects } from '../../components/projects';
import { IProjects } from '../../types';

import data from '../../utils/data';

interface Props {
  projects: IProjects[];
}

const Portfolio: React.VFC<Props> = ({ projects }) => {
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
  const projects: IProjects[] = data.projects;

  return {
    props: {
      projects,
    },
  };
};
