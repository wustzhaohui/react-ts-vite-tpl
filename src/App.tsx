import { FC, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import useLoadRouter from './hooks/useLoadRouter';
import { setupStore } from './store';
export interface AppProps {}

const App: FC<AppProps> = () => {
    useEffect(() => {
        const init = async () => {
            // 加载初始数据
            await setupStore();
        };
        init();
    }, []);
    const routes = useLoadRouter();
    return <>{useRoutes(routes)}</>;
};
export default App;
