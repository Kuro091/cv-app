import { forwardRef } from 'react';

interface ProjectContainerProps {
  children: React.ReactNode;
}

const ProjectContainer = forwardRef<HTMLElement, ProjectContainerProps>(({ children }, ref) => {
  return (
    <section ref={ref}>
      <main className='sticky top-0 flex items-center flex-nowrap overflow-hidden [&>*:nth-child(even)]:bg-deep-purple-900 [&>*:nth-child(odd)]:bg-deep-orange-900'>
        {children}
      </main>
    </section>
  );
});

ProjectContainer.displayName = 'ProjectContainer';

export default ProjectContainer;
