import Link from 'next/link';
import { AnimatedMenu } from './AnimatedComponents/AnimatedMenu';
import Navigation from './Navigation';
import { useClientStore } from './hooks/useClientStore';

const Header = () => {
  const { isMenuOpen } = useClientStore();

  return (
    <>
      <section
        className={`sticky justify-between top-0 flex items-center min-h-[5rem] w-full z-[9]`}
      >
        <Link href='/'>
          <div className='ml-20 w-[100px] flex items-center justify-center text-2xl font-extrabold bg-white text-black z-[99999]'>
            MINHLC
          </div>
        </Link>
        <AnimatedMenu renderMenu={({ onItemClick }) => <Navigation onItemClick={onItemClick} />} />
      </section>
    </>
  );
};

export default Header;
