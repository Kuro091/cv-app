import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

interface ProjectItemsProps {
  projects: ProjectItem[];
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectItems: FC<ProjectItemsProps> = ({ projects }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      {projects.map((item) => (
        <div
          key={item.title}
          className='min-h-screen min-w-[100vw] flex items-center justify-center'
        >
          <motion.div
            style={{
              y,
            }}
            ref={ref}
            className='text-9xl'
          >
            {item.title}
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default ProjectItems;
