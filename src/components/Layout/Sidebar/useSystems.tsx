import { SearchOutlined } from '@ant-design/icons';
import { trackingSystemIcon } from 'components/Layout/Sidebar/components/systemIcons';
import routes from 'global/Constants/routes';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';

export type system = {
  name: string;
  title: string;
  icon: ReactNode;
  to?: string;
  subMenu?: subSystem[];
  shortDescription?: string;
  description?: string;
  hasAccess?: boolean;
  serviceIcon: (_width?: string, _height?: string) => ReactNode;
  index: number;
};

export type subSystem = {
  name: string;
  to: string;
  hasAccess: boolean;
  isDefault?: boolean;
  hideInOldPanel?: boolean;
};

const useSystems = () => {
  //states
  const [selectedSystem, setSelectedSystem] = useState<system>();
  const [selectedSubSystem, setSelectedSubSystem] = useState<subSystem>();

  //hooks
  const { pathname } = useLocation();

  //functions

  const getLinklength = (link?: string) => {
    if (!link) return 0;
    return link.split('/').length - 1;
  };
  const getImportantPartOfPath = (pathname: string): string => {
    const result = pathname.split('/');

    result.shift();
    return result.slice(0, getLinklength(pathname)).join('');
  };
  const isSelected = (systemRoute: string, pathname: string) => {
    const importantPartOfPathname = getImportantPartOfPath(pathname);
    const importantPartOfSystemRoute = getImportantPartOfPath(systemRoute);
    return importantPartOfPathname === importantPartOfSystemRoute;
  };

  //constants
  const systems: system[] = useMemo(
    () =>
      [
        {
          name: 'رهگیری',
          title: 'tracking',
          description: 'اطلاع از وضعیت مرسوله',
          shortDescription: 'اطلاع از وضعیت مرسوله',
          icon: (
            <div className='color-inherit text-t-primary-color dark:text-t-text-color'>
              <SearchOutlined className='text-sm text-t-primary' />
            </div>
          ),
          serviceIcon: trackingSystemIcon,
          to: routes.dashboard.path
        }
      ].map((s, i) => ({ ...s, index: i })),
    []
  );

  //effects
  useEffect(() => {
    updateSelectedSystem(pathname);
    let subSystem: subSystem | undefined;
    systems.map((s) => {
      if (s.subMenu) {
        s.subMenu.map((sub) => {
          const selected = isSelected(sub.to, pathname);
          if (selected) {
            subSystem = sub;
          }
        });
      }
    });
    setSelectedSubSystem(subSystem);
  }, [pathname]);

  const updateSelectedSystem = (pathname: string) => {
    const pathnameSystemName = pathname.split('/')[1];

    let selectedSystem: system | undefined;
    systems.map((s) => {
      if (!!selectedSystem) return;
      if (!s.subMenu && s.to) {
        const systemRouteSystemName = s.to.split('/')[1];
        if (pathnameSystemName === systemRouteSystemName) {
          selectedSystem = s;
        }
      }
      if (!!selectedSystem) return;

      if (s.subMenu) {
        s.subMenu.map((sub) => {
          const subRouteSystemName = sub.to.split('/')[1];
          if (subRouteSystemName === pathnameSystemName) {
            selectedSystem = s;
          }
        });
      }
    });
    setSelectedSystem(selectedSystem);
  };

  return { systems, selectedSystem, selectedSubSystem };
};

export default useSystems;
