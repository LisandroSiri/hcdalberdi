import { Outlet } from 'react-router-dom';
import FloatingSocials from './FloatingSocials';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
            <FloatingSocials />
        </div>
    );
};

export default Layout;