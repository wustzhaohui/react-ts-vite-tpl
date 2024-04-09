import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import main, { loadLocalToken, loadMenu, loadUserInfo } from './modules/main';
import { useDispatch } from 'react-redux';

// 创建一个 Redux
const store = configureStore({
    reducer: {
        main,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// 统一在这里初始化一些缓存的数据
export function setupStore() {
    // 这里是缓存的菜单，程序加载会先调用这个
    return new Promise((resolve: any, reject): void => {
        store.dispatch(loadMenu());
        store.dispatch(loadUserInfo());
        store.dispatch(loadLocalToken());
        resolve();
    });
}

export type MRootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<MRootState, any, AnyAction>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export default store;
