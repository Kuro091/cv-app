import Link from 'next/link';
import { useColor } from '../hooks/useColor';
import { PortfolioCard } from './PortfolioCard';
import useProjects from './useProjects';

const Portfolio = () => {
  const { currentColor } = useColor();
  const projects = useProjects();

  return (
    <>
      <div className='mb-5'>
        Still underconstructing, but you can check my github for now: &nbsp;
        <Link className='font-bold' href='https://github.com/Kuro091/'>
          https://github.com/Kuro091/
        </Link>
      </div>
      <section className='relative flex gap-5 justify-center h-fit flex-wrap w-full'>
        {projects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
};

export default Portfolio;
