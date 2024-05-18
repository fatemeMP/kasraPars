import { Spin, SpinProps } from 'antd';
import { FC, ReactNode } from 'react';

interface ITcLoading extends SpinProps {
  spinning?: boolean;
  className?: string;
  children?: ReactNode;
}

const TcLoading: FC<ITcLoading> = ({ children, spinning, className, ...props }) => {
  return (
    <Spin className={className} spinning={spinning} {...props}>
      {children}
    </Spin>
  );
};

export default TcLoading;
