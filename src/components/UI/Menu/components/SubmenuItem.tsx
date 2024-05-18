import { FC } from 'react';
import { Link } from 'react-router-dom';
interface ISubmenuItem {
  to: string;
  isSelected: boolean;
  name: string;
  open?: boolean;
}
const SubmenuItem: FC<ISubmenuItem> = ({ to, isSelected, name, open }) => {
  return (
    <div className={`relative px-2 mb-1 transition-all duration-300 ease-out group ${!isSelected && 'hover:bg-t-layer-bg-color-hovered rounded-xl'}`}>
      <Link to={to}>
        <div className={`flex items-center px-3 py-1 transition-all ease-out duration-300  rounded-xl h-8 text-sm  ${isSelected && 'bg-t-primary-color/5'}`}>
          {open && <div className='w-3' />}
          {open && name}
        </div>
      </Link>
      {isSelected && <div className='absolute top-0 w-[7px] h-full left-2 rounded-l-xl bg-t-primary-color animate-scale'></div>}
    </div>
  );
};

export default SubmenuItem;
