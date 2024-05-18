import TcTooltip from 'components/UI/Tooltip/TcTooltip';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
// import style from '../style.module.css';

interface IMenuItem {
  open?: boolean;
  to: string;
  isSelected: boolean;
  icon: ReactNode;
  name: string;
  horizental?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ open, to, isSelected, icon, name, horizental = false }) => {
  return (
    <TcTooltip placement='left' title={!open ? name : ''}>
      <div className='relative w-full px-2 mb-1 overflow-hidden transition-all duration-300 ease-out group shrink-0'>
        <Link to={to}>
          <div
            className={`flex items-center h-8 px-3 py-1 transition-all ease-out duration-300  rounded-xl  ${isSelected && 'bg-t-primary-color/5 '} ${
              !isSelected && 'hover:bg-t-layer-bg-color '
            }`}>
            {icon}
            <div className={`flex w-full pr-2  transition-all overflow-hidden ease-out whitespace-nowrap text-sm ${horizental ? '' : open ? 'max-w-[180px]' : 'max-w-[0]'}`}>
              {name}
            </div>
          </div>
        </Link>
        {isSelected && <div className='absolute top-0 w-[7px] h-full left-2 rounded-l-xl bg-t-primary-color animate-scale'></div>}
      </div>
    </TcTooltip>
  );
};

export default MenuItem;
