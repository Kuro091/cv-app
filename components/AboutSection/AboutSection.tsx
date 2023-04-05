import { motion, useCycle } from 'framer-motion';
import Layout from '../../pages/layout';
import { AnimatedContainer } from '../AnimatedComponents/AnimatedContainer';
import { AnimatedCard } from '../AnimatedComponents/AnimatedCard';
import { useColor } from '../hooks/useColor';

const About = () => {
  const { currentColor } = useColor();

  return (
    <section className='py-[7rem] pb-5 px-20 mb-10'>
      <div className='grid grid-flow-row lg:grid-cols-[20rem_1fr]'>
        <AnimatedCard
          className='-translate-y-5'
          imgSrc='/images/cat2.jpg'
          cardBackgroundColor={currentColor?.darkest}
          title='This is me'
          subtitle='yes I know im not pretty'
        />

        <div className='lg:pt-0 lg:px-10 text-justify leading-10'>
          I'm a full-stack dev (I think), but mainly focus on{' '}
          <span className='font-bold'>web development</span> <br />
          Frontend stuff I've done includes...
          <span className='font-bold'>ReactJS, NextJS, VueJS, Angular</span>
          <br />
          Backend stuff I've done includes...
          <span className='font-bold'>NodeJs with Express, NestJS, Prisma</span> <br />
          I'm also familiar with{' '}
          <span className='font-bold'>
            Docker, Kubernetes, or cloud providers like AWS, GCP, Firebase
          </span>
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
