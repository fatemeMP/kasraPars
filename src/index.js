import 'assets/css/antCustomizations.css';
// import 'assets/css/color.css';
import 'assets/css/global.css';

import { ConfigProvider } from 'antd';
import fa from 'antd/es/locale/fa_IR';
import App from 'components/App';
import 'config.js';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ConfigProvider
    locale={fa}
    direction='rtl'
    theme={{
      token: {
        fontFamily: 'iranyekan',
        colorPrimary: '#007141',
        // colorPrimary: config.PROJECT_PRIMARY_COLOR,
        fontSizeBase: 12,
        borderRadius: 10
      }
    }}>
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          {/* <React.StrictMode> */}
          <App className='rtl-grid' />
          {/* </React.StrictMode> */}
        </Router>
      </Provider>
    </HelmetProvider>
  </ConfigProvider>
);
