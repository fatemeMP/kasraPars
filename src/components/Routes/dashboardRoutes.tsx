import routes from 'global/Constants/routes';
import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));

const dashboardRoutes = () => [
  {
    path: routes.dashboard.path,
    component: Dashboard,
    type: 'private'
    // accessRole: hasAccessTo('dashboard'),
  }
];

export default dashboardRoutes;
