import { DownOutlined } from '@ant-design/icons';
import { FC, ReactElement, ReactNode } from 'react';

interface ISubmenuWrapper {
  open?: boolean;
  isWrapperOpen: boolean;
  setIsWrapperOpen: (_a: boolean) => void;
  itemsCount: number;
  haveSubmenu: boolean;
  icon: ReactNode;
  name: string;
  submenuSelected: boolean;
  horizental?: boolean;
  children: ReactElement;
}
const SubmenuWrapper: FC<ISubmenuWrapper> = ({ open, isWrapperOpen, setIsWrapperOpen, horizental = false, itemsCount, haveSubmenu, icon, name, submenuSelected, children }) => {
  return (
    <div
      className={`px-2 relative flex-shrink-0 transition-all ease-out  cursor-pointer group duration-700 ${!submenuSelected && 'hover:bg-t-layer-bg-color'}  mb-1 ${
        open && 'overflow-hidden '
      } ${isWrapperOpen && open ? 'bg-t-layer-bg-color' : ''} `}
      style={{ maxHeight: isWrapperOpen && open ? `${itemsCount * 40 + 40}px` : '30px' }}>
      <div
        className={`flex items-center mb-2  px-3 py-1 transition-all ease-out rounded-xl group- ${isWrapperOpen && ' '} ${
          submenuSelected && (!isWrapperOpen || !open) && 'bg-t-layer-bg-color'
        }`}
        onClick={() => setIsWrapperOpen(!isWrapperOpen)}>
        <span style={{ color: 'white !important' }}> {icon}</span>
        {/* {!open && <CaretLeftFilled className='mr-2' />} */}
        <div className={`flex w-full pr-2 transition-all overflow-hidden whitespace-nowrap ease-in-out ${horizental ? '' : open ? 'max-w-[180px]' : 'max-w-[0]'}`}>
          <span className='ml-3 text-sm font-medium'>{name}</span>
          {haveSubmenu && <DownOutlined className='mr-auto transition-all duration-700 text-t-text-color' style={{ transform: isWrapperOpen ? 'scaleY(-1)' : '' }} />}
        </div>
      </div>

      {children}
      {!open && submenuSelected && <div className='absolute top-0 w-[7px] h-full left-2 rounded-l-xl bg-t-primary-color max-h-[32px] animate-scale'></div>}
    </div>
  );
};

export default SubmenuWrapper;
