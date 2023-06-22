import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import { useWindowSize } from 'usehooks-ts';
import Image from 'next/image';
import { Layout } from '../../components/Layouts/';

gsap.registerPlugin(ScrollTrigger);

type Content = HTMLElement & {
  enter: () => void;
  leave: () => void;
};

type ContentMarker = HTMLElement & {
  content: Content;
};

const TestPage = () => {
  return (
    <Layout>
      <RedSection />
      <OrangeSection />
      <RedSection />
    </Layout>
  );
};

const OrangeSection = () => {
  const contentToPin = useRef<HTMLDivElement>(null);
  let contentMarkers = useRef<ContentMarker[]>();
  let lastContent = useRef<Content>();

  const getCurrentSection = (self: ScrollTrigger) => {
    let newContent: Content | undefined;
    const currScroll = self.scroll();

    // Find the current section
    contentMarkers.current?.forEach((marker) => {
      const markerScroll = marker.offsetTop;

      if (currScroll > markerScroll) {
        newContent = marker.content;
      }
    });

    // If the current section is different than that last, animate in
    if (newContent && !newContent.isSameNode(lastContent.current!)) {
      // Fade out last section
      if (lastContent.current) lastContent.current?.leave();

      // Animate in new section
      newContent.enter();

      // Set last section to current section
      lastContent.current = newContent;
    }
  };

  // Setting up the content markers (p tags)
  // Map left content to right content, essentially
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.location.reload();
    });
    contentMarkers.current = gsap.utils.toArray<ContentMarker>('.contentMarker');

    contentMarkers?.current.forEach((marker) => {
      marker.content = document.querySelector(`#${marker.dataset.markerContent}`) as Content;

      if (marker.content.tagName === 'IMG') {
        gsap.set(marker.content, { transformOrigin: 'center' });

        marker.content.enter = function () {
          gsap.fromTo(marker.content, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
        };
      }

      marker.content.leave = function () {
        gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
      };
    });
  }, []);

  // Initiate the pin setup (pin left, scrollable right)
  useEffect(() => {
    gsap.defaults({ overwrite: 'auto' });

    let ctx = gsap.context(() => {
      gsap.to('#content-container', {
        scrollTrigger: {
          trigger: '#content-container',
          start: 'top top',
          endTrigger: '#right-content',
          pin: contentToPin.current,
          pinSpacing: false,
          pinType: 'fixed',
          onUpdate: getCurrentSection,
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <section id='content-container' className={`bg-red-100 flex [&>*]:w-1/2`}>
      <div
        ref={contentToPin}
        id='left-content'
        className=' bg-pink-200 max-h-screen translate-x-0 flex flex-col relative [&>*]:absolute [&>*]:opacity-0 [&>*]:invisible'
      >
        {/*eslint-disable @next/next/no-img-element  */}
        <img id='img1' src='https://placekitten.com/1300/1300?image=1' alt='kitty' />
        <img id='img2' src='https://placekitten.com/1300/1300?image=2' alt='kitty' />
        <img id='img3' src='https://placekitten.com/1300/1300?image=3' alt='kitty' />
      </div>

      <div
        id='right-content'
        className='flex flex-col bg-orange-900 [&>*]:py-[50rem] items-start text-5xl'
      >
        <p className='contentMarker' data-marker-content='img1'>
          Cat 1
        </p>
        <p className='contentMarker' data-marker-content='img2'>
          Cat 2
        </p>
        <p className='contentMarker' data-marker-content='img3'>
          Cat 3
        </p>
      </div>
    </section>
  );
};

const RedSection = () => {
  return (
    <section className='relative bg-red-900 h-screen flex items-center justify-center'>
      <h2 className='absolute top-1/2 left-1/2 text-white text-5xl font-bold'>Red</h2>
    </section>
  );
};

export default TestPage;
