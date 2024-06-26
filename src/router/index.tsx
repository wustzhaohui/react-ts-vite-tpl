import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const lazyLoad = (factory: () => Promise<any>) => {
    /**
     *
     * @param factory
     * @returns Suspense
     */
    const Module = lazy(factory);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Module />
        </Suspense>
    );
};

/**
 * 路由鉴权组件
 * @returns 根据条件判断是否返回到登录页面
 */
const Appraisal = () => {
    const token = localStorage.getItem('token');
    return token ? lazyLoad(() => import('@/pages/main')) : <Navigate to='/login' />;
};
const router: RouteObject[] = [
    {
        path: '/',
        element: <Appraisal></Appraisal>,
        children: [],
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/pages/login')),
    },
    {
        path: '*',
        element: lazyLoad(() => import('@/pages/loading')),
    },
];

export { router };
