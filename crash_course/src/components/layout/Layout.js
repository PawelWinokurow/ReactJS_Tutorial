import style from '../layout/Layout.module.css';
import MainNavigation from './MainNavigation';
import { BrowserRouter } from 'react-router-dom';

export default function Layout(props){
    return (
        <div>
            <BrowserRouter>
                <MainNavigation />
                <main className={style.main}>{props.children}</main>
            </BrowserRouter>
        </div>
    );
}