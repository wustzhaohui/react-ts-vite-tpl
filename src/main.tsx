import ReactDOM from 'react-dom/client';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
/**
 * 使用BrowserRouter模式
 * 使用redux来全局状态管理
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
