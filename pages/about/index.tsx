import { motion, useCycle } from 'framer-motion';
import Layout from '../layout';
import { useColor } from '../../components/hooks/useColor';
import { AnimatedContainer } from '../../components/AnimatedComponents/AnimatedContainer';
import { AnimatedCard } from '../../components/AnimatedComponents/AnimatedCard';
import { AnimatedCardStacks } from '../../components/AnimatedComponents/AnimatedCardStacks';

const About = () => {
  const { currentColor } = useColor();

  return (
    <Layout>
      <section className='pt-[7rem] pb-5 px-20 '>
        <AnimatedContainer
          backgroundColor={currentColor?.darker}
          borderColor={currentColor?.lightest}
        >
          About
        </AnimatedContainer>
        <div className='grid grid-flow-row lg:grid-cols-[20rem_1fr]'>
          <AnimatedCard
            imgSrc='/images/cat.jpg'
            cardBackgroundColor={currentColor?.darkest}
            title='Mr. ABC'
            subtitle='Like food & sleep'
          />
          <div className='pt-20 lg:pt-0 lg:px-10 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nulla eget ipsum
            vehicula bibendum. Pellentesque at posuere ante, eu hendrerit orci. Quisque vel pharetra
            libero, vel hendrerit lectus. Integer pretium consequat odio, sit amet laoreet lorem
            porta non. Etiam ornare, nulla eu faucibus condimentum, ligula purus imperdiet ipsum, et
            sagittis sem sem quis augue. Curabitur nunc nulla, consequat at dui eget, dictum ornare
            eros. Sed quis massa odio. Curabitur eget molestie velit. Ut rutrum urna et ultricies
            tincidunt. Integer ultricies libero vitae mi dictum vestibulum. Vestibulum eu
            pellentesque urna. Nunc vitae auctor metus. Duis pulvinar tempor urna eu iaculis. Nullam
            dictum arcu sit amet leo ultricies venenatis. Proin eu rutrum magna. Vivamus eget libero
            felis. Donec tincidunt magna nec semper semper. Aenean elementum euismod tortor, ut
            ullamcorper nulla dictum ac. Duis in arcu lorem.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
