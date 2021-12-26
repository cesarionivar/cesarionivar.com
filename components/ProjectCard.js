export const ProjectCard = ({ project }) => {
  return (
    <div className='projectCard'>
      <img
        src={project?.imgUrl}
        alt={project?.name}
        className='prrojectCard__img'
      />
      <div className='projectCard__info'>
        <h2>{project?.name}</h2>
        <p>{project?.description}</p>
        <a href={project?.previewUrl} target='_blank' rel='noreferrer'>
          Preview
        </a>
        <a
          href={project?.code}
          className='code-github'
          target='_blank'
          rel='noreferrer'
        >
          Code <i className='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
};
