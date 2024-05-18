import TcContent from 'components/Layout/Content/TcContent';
import TcHeader from 'components/Layout/Header/Header';
import { FC, ReactNode } from 'react';

const TcLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex flex-col justify-between flex-grow-0 flex-shrink w-full mx-auto' style={{ maxWidth: '1400px' }}>
        <TcHeader />
        {/* <TcVerticalSidebar /> */}
        <TcContent>{children}</TcContent>
      </div>
    </div>
  );
};

export default TcLayout;
