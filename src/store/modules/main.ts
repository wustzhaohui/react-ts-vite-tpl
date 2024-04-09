import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { router as defaultRouter, lazyLoad } from '@/router';
import { deepCopyRoute } from '@/utils';
import { RouteObject } from 'react-router-dom';

// 这里统一加载缓存的一些数据
export const loadMenu = createAsyncThunk('main/loadLocalLogin', async (_, { dispatch }) => {
    let menus = [];
    dispatch(
        changeMenusAction({
            path: 'dashbord',
            element: lazyLoad(() => import('@/pages/dashbord')),
        }),
    );
});

export const loadUserInfo = createAsyncThunk('main/loadUserInfo', async (_, { dispatch }) => {
    try {
        // const data = await api_system.userInfo();
        // dispatch(setUserInfoAction(data));
    } catch (error) {
        console.error(error);
    }
});

export const loadLocalToken = createAsyncThunk('main/loadLocalToken', (_, { dispatch }) => {
    const token = localStorage.token;
    if (token) {
        dispatch(setTokenAction(token));
    }
});

const mainSlice = createSlice({
    name: 'login',
    initialState: {
        menus: defaultRouter,
        token: null,
        userInfo: null,
        routerLoading: false,
    },
    reducers: {
        changeMenusAction(state, { payload }) {
            // 把数据存到redux里面，有点类似vuex
            let copyRouter: RouteObject[] = deepCopyRoute(state.menus);
            let setMenu: RouteObject = copyRouter.find((child) => child.path === '/') || {};
            setMenu!.children = [payload];
            state.menus = [...copyRouter];
            state.routerLoading = false;
        },
        setTokenAction(state, { payload }) {
            state.token = payload;
            localStorage.setItem('token', payload);
        },
        setUserInfoAction(state, { payload }) {
            state.userInfo = payload;
        },
        setRouterLoading(state, { payload }) {
            state.routerLoading = payload;
        },
    },
});

function transRouter(data: any) {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        item.element = lazyLoad(() => import(item.component));
        if (item.children && item.children.length) {
            transRouter(item.children);
        }
    }
}

export const { changeMenusAction, setTokenAction, setUserInfoAction, setRouterLoading } =
    mainSlice.actions;

export default mainSlice.reducer;
