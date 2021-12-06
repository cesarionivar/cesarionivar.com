import { ProjectCard } from './ProjectCard';

export const Projects = ({ projects }) => {
  return (
    <div className='projects'>
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
