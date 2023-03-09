import Link from 'next/link';
import { AnimatedMenu } from './AnimatedComponents/AnimatedMenu';
import Navigation from './Navigation';
import { useClientStore } from './hooks/useClientStore';
import { useColor } from './hooks/useColor';

const Header = () => {
  const { isMenuOpen } = useClientStore();
  const { currentColor } = useColor();

  return (
    <>
      <section
        className={`sticky justify-between top-0 flex items-center min-h-[5rem] w-full z-[1]`}
      >
        <Link href='/'>
          <div className='ml-20 w-[100px] flex items-center justify-center text-2xl font-extrabold bg-white text-black '>
            MINHLC
          </div>
        </Link>
      </section>
      <AnimatedMenu renderMenu={({ onItemClick }) => <Navigation onItemClick={onItemClick} />} />
    </>
  );
};

export default Header;
