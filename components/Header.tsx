import Link from 'next/link';
import { AnimatedMenu } from './AnimatedComponents/AnimatedMenu';
import Navigation from './Navigation';
import { useClientStore } from './hooks/useClientStore';

const Header = () => {
  const { isMenuOpen } = useClientStore();
  const zIndex = isMenuOpen ? 'z-[-2]' : 'z-[11]';
  console.log('isMenuOpen ', isMenuOpen);
  return (
    <>
      <section className={`fixed top-0 w-[calc(100%-10%)] min-h-[5rem] pt-10 ${zIndex}`}>
        <div className='flex gap-20 pl-20'>
          <Link href='/'>
            <div className='w-[100px] flex items-center justify-center text-2xl font-extrabold bg-white text-black '>
              MINHLC
            </div>
          </Link>
        </div>
      </section>
      <AnimatedMenu
        className='fixed top-0 z-10'
        renderMenu={({ onItemClick }) => <Navigation onItemClick={onItemClick} />}
      />
    </>
  );
};

export default Header;
