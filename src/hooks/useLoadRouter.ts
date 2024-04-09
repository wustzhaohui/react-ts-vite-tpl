import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { MRootState } from '@/store';
import { router as defaultRoutes } from '@/router';
const useLoadRouter = () => {
    const [routes, setRoutes] = useState(defaultRoutes);
    const { menus } = useSelector(
        (state: MRootState) => ({
            menus: state.main.menus,
        }),
        shallowEqual,
    );
    useEffect(() => {
        // 最后设置最新的路由
        setRoutes(menus);
    }, [menus]);
    return routes;
};

export default useLoadRouter;
