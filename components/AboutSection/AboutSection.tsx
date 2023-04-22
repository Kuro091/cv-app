import { useColor } from '../hooks/useColor';
import Card from '../Card/Card';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import ApprovalIcon from '@mui/icons-material/Approval';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import badges from '../../data/badges';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const { currentColor } = useColor();

  const details = [
    {
      icon: <SentimentSatisfiedIcon sx={{ color: currentColor?.light }} />,
      title: 'I love what I do',
      description:
        "I'm all about delivering top-notch work while still maintaining a relaxed, easy-going attitude.",
    },
    {
      icon: <ApprovalIcon sx={{ color: currentColor?.light }} />,
      title: 'I deliver results',
      description:
        "With a focus on professionalism and quality, I'm confident that I can bring your project to life in a way that exceeds your expectations.",
    },
    {
      icon: <CropRotateIcon sx={{ color: currentColor?.light }} />,
      title: 'I adapt to your needs',
      description:
        "I'm adaptable and able to learn quickly in order to keep up with the latest trends and developments.",
    },
    {
      icon: <ConnectWithoutContactIcon sx={{ color: currentColor?.light }} />,
      title: 'I communicate well',
      description:
        "I'm a good communicator and enjoys working with others to achieve common goals.",
    },
  ];

  return (
    <>
      <div className='lg:pt-0 lg:px-10 text-justify leading-10'>
        I provide full-stack services, but mainly focus on{' '}
        <span className='font-bold'>web development</span> <br />
        Frontend stuff I&apos;ve done includes...
        <span className='font-bold'>ReactJS, NextJS, VueJS, Angular</span>
        <br />
        Backend stuff I&apos;ve done includes...
        <span className='font-bold'>NodeJs with Express, NestJS, Prisma</span> <br />
        I&apos;m also familiar with{' '}
        <span className='font-bold'>
          Docker, Kubernetes, or cloud providers like AWS, GCP, Firebase
        </span>
        <br />
        <div className='mt-10 grid xl:grid-cols-2 grid-cols-1 gap-14'>
          {details.map((detail) => (
            <Card
              key={detail.title}
              icon={detail.icon}
              title={detail.title}
              description={detail.description}
            />
          ))}
        </div>
        <div className='flex justify-center flex-wrap gap-2 mt-10 ml-auto'>
          {badges.map((badge) => {
            return (
              <Link href={badge.link} key={badge.title}>
                <Image alt={badge.title} src={badge.imgUrl} width={150} height={150} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
