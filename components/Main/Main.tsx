import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';

const Main = () => {
  return (
    <>
      <section className='flex items-center justify-center flex-col'>
        <div className='text-2xl font-bold'>Hi there!</div>
        <div className='text-xl font-semibold'>This is my portfolio</div>
        <div className='mt-5 w-full h-screen'>
          <div className='mx-10 gap-5 md:mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-5 md:w-3/4 md:min-h-3/4 h-fit'>
            <LeftContent />
            <RightContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
