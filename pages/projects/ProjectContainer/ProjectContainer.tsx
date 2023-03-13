import { forwardRef } from 'react';

interface ProjectContainerProps {
  children: React.ReactNode;
}

const ProjectContainer = forwardRef<HTMLElement, ProjectContainerProps>(({ children }, ref) => {
  return (
    <section ref={ref}>
      <main className='sticky top-0 flex items-center flex-nowrap overflow-x-hidden [&>*:nth-child(odd)]:bg-pink-500'>
        {children}
      </main>
    </section>
  );
});

ProjectContainer.displayName = 'ProjectContainer';

export default ProjectContainer;
