const TcHeader = () => {
  const headerContent = (
    <>
      <div className='flex items-center gap-4 w-fit text-t-error-color '>HEADER</div>
    </>
  );

  return (
    <div className='print:hidden flex flex-col items-center justify-between w-[98%] sm:w-11/12 pl-2 pr-4 py-2 mx-auto mt-2 mb-4 rounded-3xl bg-t-bg-color sm:flex-row '>
      {headerContent}
    </div>
  );
};

export default TcHeader;
