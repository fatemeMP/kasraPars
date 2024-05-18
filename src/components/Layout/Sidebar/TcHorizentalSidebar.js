import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import Sidebar from 'components/Layout/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TcHorizentalSidebar = () => {
  //states
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  //effects
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  //functions
  const toggleOpen = () => setOpen((prevState) => !prevState);

  // if (pathname === routes.homePage.path) return null;

  return (
    <aside
      className={` flex shrink-0 overflow-hidden mb-2 transition-all  ease-in-out sm:hidden w-[98%] flex-col pb-2 pt-3 mt-2 mx-auto bg-t-bg-color duration-1000 rounded-xl  text-t-text-color print:hidden border border-t-bg-color ${
        open ? 'max-h-[1000px]' : 'max-h-[45px] hover:bg-t-layer-bg-color'
      }`}>
      <div className='flex items-center justify-between px-2 mx-2 mb-4 transition-all duration-300 cursor-pointer rounded-xl shrink-0 inherit-color ' onClick={toggleOpen}>
        <div className='flex items-center gap-x-4 shrink-0 '>
          <MenuOutlined />
          گزینه ها
        </div>
        <DownOutlined className='mr-auto transition-all ' style={{ transform: open ? 'scaleY(-1)' : '' }} />
      </div>
      <Sidebar open={true} horizental />
    </aside>
  );
};

export default TcHorizentalSidebar;
