import React from 'react';
import MainNavbar from '../../components/MainNavbar';
import Footer from '../../components/Footer';
import './index.css';
import { MainLayoutProps } from './types';

const MainLayout: React.FC<MainLayoutProps> = (props) => {
    return(
        <React.Fragment>
            <MainNavbar isLoggedIn={props.isLoggedIn} />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default MainLayout;