import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export interface MainProps {}

const Main: FC<MainProps> = () => {
    return <Outlet></Outlet>;
};
export default Main;
