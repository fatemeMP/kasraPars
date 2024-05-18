import TcLayout from 'components/Layout/TcLayout';
import dashboardRoutes from 'components/Routes/dashboardRoutes';
import TcLoading from 'components/UI/Loading/TcLoading';
import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { RootState } from 'redux/store';

function MainRouter() {
  // state
  const { theme } = useSelector((state: RootState) => state.setting);

  //defaultSettings
  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    const root = document.querySelector(':root');
    root?.setAttribute('color-scheme', theme);
    theme === 'dark' && root?.classList.add('dark');
    theme === 'light' && root?.classList.remove('dark');
  }, [theme]);

  const routesList = [
    //!داشبورد
    ...dashboardRoutes()
  ];

  return (
    <>
      <TcLayout>
        <Suspense fallback={<TcLoading className='grid h-screen place-items-center' />}>
          <Switch>
            {routesList.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Suspense>
      </TcLayout>
    </>
  );
}

export default memo(MainRouter);
