import type { IProjects } from '../../types';
import { ProjectCard } from './ProjectCard';

interface Props {
  projects: IProjects[];
}

export const Projects: React.VFC<Props> = ({ projects }) => {
  return (
    <div className='projects'>
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
