// Layout.jsx
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import SparkleEffect from './SparkleEffect';

export default function Layout({ children }) {
    const location = useLocation();
    const isDetailPage = location.pathname.startsWith('/character/');

    return (
        <div className="layout-container">
            {!isDetailPage && <Sidebar />}
            <div className="main-content">
                <SparkleEffect />
                {children}
            </div>
        </div>
    );
}
