import { loadMenu, setRouterLoading } from '@/store/modules/main';
import { FC } from 'react';
import { useAppDispatch } from '@/store/index';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const btnClick = async () => {
        dispatch(setRouterLoading(true));
        dispatch(loadMenu());

        navigate('/dashbord');
    };
    return (
        <div>
            This is a Login
            <button onClick={btnClick}>去首页</button>
        </div>
    );
};
export default Login;
