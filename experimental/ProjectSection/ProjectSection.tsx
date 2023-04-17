import { useEffect, useRef, useCallback, useState } from 'react';
import { AnimatedContainer } from '../AnimatedComponents/AnimatedContainer';
import { useDebounce, useWindowSize } from 'usehooks-ts';
import { ProjectItem } from '../Projects/ProjectItems/ProjectItems';
import ProjectItems from '../Projects/ProjectItems/ProjectItems';
import { useScroll } from 'framer-motion';
import { useColor } from '../../components/hooks/useColor';
import { ProjectContainer } from '../Projects/ProjectContainer';

export enum ScrollDirection {
  DOWN,
  UP,
}

const contractedProjects: ProjectItem[] = [
  {
    title: 'Project 1',
    description: 'Description 1',
    image: '/images/1.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    image: '/images/2.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    image: '/images/3.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 4',
    description: 'Description 4',
    image: '/images/4.jpg',
    link: 'https://google.com',
  },
];

const personalProjects: ProjectItem[] = [
  {
    title: 'Project 5',
    description: 'Description 5',
    image: '/images/5.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 6',
    description: 'Description 6',
    image: '/images/6.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 7',
    description: 'Description 7',
    image: '/images/7.jpg',
    link: 'https://google.com',
  },
  {
    title: 'Project 8',
    description: 'Description 8',
    image: '/images/8.jpg',
    link: 'https://google.com',
  },
];

/*
  Horizontal Section must be structured like this
  make sure changes in ProjectItem are reflected here
  <section> ----> section is sticky but set during useEffect
    <main> ----> main is sticky top-0
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </main>
  </section>
*/

const ProjectSection = () => {
  const { currentColor } = useColor();
  const containerRef = useRef<Array<HTMLElement | null>>([]);
  const { height: windowHeight } = useWindowSize();

  const isElementInViewport = useCallback(
    (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();

      return rect.top <= 0 && rect.bottom >= windowHeight;
    },
    [windowHeight]
  );

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.forEach((container) => {
        if (container) {
          const stickyContainerHeight =
            (container.children[0] as HTMLElement).offsetWidth + window.innerHeight;
          container.setAttribute('style', 'height: ' + stickyContainerHeight + 'px');
        }
      });
    }
  }, [windowHeight]);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const containerInViewPort = containerRef.current.find((_container) => {
        const container = _container!;
        const isVisible = isElementInViewport(container);
        if (!isVisible) {
          const containerWidth = container.offsetTop + container.offsetWidth;
          if (containerWidth < window.pageYOffset) {
            // container.children[0].scrollLeft = containerWidth;
          } else if (container.offsetTop < window.pageYOffset) {
            container.children[0].scrollLeft = 0;
          }
        }
        return isVisible;
      });

      if (containerInViewPort) {
        const isPlaceHolderBelowTop =
          containerInViewPort.offsetTop < document.documentElement.scrollTop;
        const isPlaceHolderBelowBottom =
          containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
          document.documentElement.scrollTop;
        const g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
          const pxToScroll = window.pageYOffset - containerInViewPort.offsetTop;
          containerInViewPort.children[0].scrollLeft = pxToScroll * 3;
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('wheel', () => {});
    };
  }, [isElementInViewport]);

  return (
    <>
      <section className='pt-[7rem] pb-5 px-20 sticky'>
        <AnimatedContainer
          backgroundColor={currentColor?.darker}
          borderColor={currentColor?.lightest}
        >
          Projects
        </AnimatedContainer>
      </section>

      <section className='h-96 flex items-center justify-center'>Vertical section</section>
      <ProjectContainer
        ref={(el) => {
          if (el && containerRef.current) containerRef.current[0] = el;
        }}
      >
        <ProjectItems projects={contractedProjects}></ProjectItems>
      </ProjectContainer>
      <section className='h-96 flex items-center justify-center'>Vertical Section</section>
      <ProjectContainer
        ref={(el) => {
          if (el && containerRef.current) containerRef.current[1] = el;
        }}
      >
        <ProjectItems projects={personalProjects}></ProjectItems>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
