import { forwardRef } from 'react';

interface ProjectContainerProps {
  children: React.ReactNode;
}

const ProjectContainer = forwardRef<HTMLElement, ProjectContainerProps>(({ children }, ref) => {
  return (
    <section ref={ref}>
      <main className='sticky top-0 flex items-center flex-nowrap overflow-hidden [&>*:nth-child(odd)]:bg-deep-orange-200'>
        {children}
      </main>
    </section>
  );
});

ProjectContainer.displayName = 'ProjectContainer';

export default ProjectContainer;
