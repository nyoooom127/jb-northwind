import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import { appStore } from './Redux/AppState';
import { ThemeContext, appTheme } from './Utils/Context';
import interceptors from './Utils/Interceptors';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Create Interceptors once
interceptors.create();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <ThemeContext.Provider value={appTheme}>
                <Layout />
            </ThemeContext.Provider>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
