import Link from 'next/link';
import { useColor } from '../hooks/useColor';
import { PortfolioCard } from './PortfolioCard';
import useProjects from './hooks/useProjects';

const Portfolio = () => {
  const { currentColor } = useColor();
  const projects = useProjects();

  return (
    <>
      <div className='mb-5'>
        Most of my time was working with <strong>private clients</strong>, so I didn&apos;t have the
        time to do side projects. <br />
        That being said, here are some when I had the time! &nbsp;
        <Link className='font-bold' href='https://github.com/Kuro091/'>
          https://github.com/Kuro091/
        </Link>
      </div>
      <section className='relative flex gap-5 gap-x-10 justify-center h-fit flex-wrap w-full'>
        {projects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
};

export default Portfolio;
