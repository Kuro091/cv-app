import { useEffect, useRef } from 'react';
import { AnimatedContainer } from '../../components/AnimatedComponents/AnimatedContainer';
import { useColor } from '../../components/hooks/useColor';
import Layout from '../layout';

const Projects = () => {
  const { currentColor } = useColor();
  const containerRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.forEach((container) => {
        if (container) {
          const stickyContainerHeight = container!.offsetWidth + window.innerHeight;
          container.setAttribute('style', 'height: ' + stickyContainerHeight + 'px');
        }
      });
    }
  }, []);

  return (
    <Layout>
      <section className='pt-[7rem] pb-5 px-20 sticky'>
        <AnimatedContainer
          backgroundColor={currentColor?.darker}
          borderColor={currentColor?.lightest}
        >
          Projects
        </AnimatedContainer>
      </section>
      <section className='h-96 flex items-center justify-center'>Vertical section</section>
      <section
        ref={(el) => {
          if (el && containerRef.current) containerRef.current[0] = el;
        }}
        className='sticky max-h-[80vh] top-0 flex items-center flex-nowrap overflow-x-auto [&>*:nth-child(even)]:bg-red-500 '
      >
        {[1, 2, 3].map((item) => (
          <>
            <div className='w-full flex-[0_0_auto] flex items-center justify-center'>
              <div className='text-9xl'>{item}</div>
            </div>
          </>
        ))}
      </section>
      <section className='h-96 flex items-center justify-center'>Vertical section</section>

      <section
        ref={(el) => {
          if (el && containerRef.current) containerRef.current[0] = el;
        }}
        className='sticky max-h-[80vh] top-0 flex items-center flex-nowrap overflow-x-auto [&>*:nth-child(even)]:bg-red-500 '
      >
        {[1, 2, 3].map((item) => (
          <>
            <div className='w-full flex-[0_0_auto] flex items-center justify-center'>
              <div className='text-9xl'>{item}</div>
            </div>
          </>
        ))}
      </section>
    </Layout>
  );
};

export default Projects;
