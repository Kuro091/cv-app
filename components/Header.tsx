const Header = () => {
  return (
    <>
      <section className='fixed top-0 w-full min-h-[5rem] pt-10'>
        <div className='flex gap-20 pl-20 z-50'>
          {/* Icon */}
          <div className='w-[100px] flex items-center justify-center text-2xl font-extrabold bg-white text-black'>
            ICON
          </div>
          {/* <nav className='hidden lg:flex items-center'>
            <ul className='flex gap-10 text-2xl font-extrabold [&>*]:p-3 cursor-pointer'>
              <li className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Home</li>
              <li className='hover:bg-[#313715] hover:text-[#e2f9b8]'>About</li>
              <li className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Projects</li>
              <li className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Contact</li>
            </ul>
          </nav> */}
        </div>
      </section>
    </>
  );
};

export default Header;
