const Navigation = () => {
  return (
    <>
      <div className='flex flex-col justify-center select-none pt-24 h-full items-center lg:gap-10 text-black text-4xl lg:text-7xl font-extrabold cursor-pointer [&>*]:flex [&>*]:justify-end [&>*]:pr-36 [&>*]:py-10 [&>*]:w-full'>
        <div className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Home</div>
        <div className='hover:bg-[#313715] hover:text-[#e2f9b8]'>About</div>
        <div className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Projects</div>
        <div className='hover:bg-[#313715] hover:text-[#e2f9b8]'>Contact</div>
      </div>
    </>
  );
};

export default Navigation;
