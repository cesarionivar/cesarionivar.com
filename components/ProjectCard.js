import Image from 'next/image';

export const ProjectCard = ({ project }) => {
  return (
    <div className='projectCard'>
      <Image
        src={project?.imgUrl}
        alt={project?.name}
        className='prrojectCard__img'
        loading='lazy'
        width='100%'
        height='50%'
        layout='responsive'
        objectFit='contain'
      />
      <div className='projectCard__info'>
        <h2>{project?.name}</h2>
        <p>{project?.description}</p>
        <a href={project?.previewUrl} target='_blank' rel='noreferrer'>
          Preview
        </a>
      </div>
    </div>
  );
};
