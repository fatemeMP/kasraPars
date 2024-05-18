import useSystems from 'components/Layout/Sidebar/useSystems';
import TcMenu from 'components/UI/Menu/TcMenu';
import { FC } from 'react';

interface ITcSidebar {
  open: boolean;
  setOpen: (_open: boolean) => void;
  horizental?: boolean;
}

const TcSidebar: FC<ITcSidebar> = ({ open, horizental }) => {
  //hooks

  const { systems } = useSystems();

  return (
    <>
      {systems.map((item, index) => (
        <TcMenu key={index} {...item} horizental={!!horizental} open={open} />
      ))}
    </>
  );
};

export default TcSidebar;
