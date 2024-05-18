import Sidebar from 'components/Layout/Sidebar/Sidebar';
import { useState } from 'react';

const TcVerticalSidebar = () => {
  //states
  const [open, setOpen] = useState(true);

  // const { pathname } = useLocation();

  // if (pathname === routes.homePage.path) return null;

  return (
    <aside className='sticky top-0 z-40 flex-shrink-0 hidden h-screen pr-2 sm:block'>
      <div
        className={`flex  flex-col max-w-[250px] bg-t-bg-color mt-2 py-2 rounded-2xl print:hidden border border-t-border-color-base ${open ? 'lg:min-w-[200px]' : 'pt-4'}`}
        style={{ height: 'calc(100% - 16px)' }}>
        <div className='flex flex-col h-full overflow-y-auto'>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </div>
    </aside>
  );
};

export default TcVerticalSidebar;
