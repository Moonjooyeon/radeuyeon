import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ArtPage from './pages/ArtPage';
import GoodsPage from './pages/GoodsPage';
import ProfilePage from './pages/ProfilePage';
import CharacterDetailPage from './pages/CharacterDetailPage';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/art" element={<ArtPage />} />
                <Route path="/goods" element={<GoodsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/character/:id" element={<CharacterDetailPage />} />
            </Routes>
        </Layout>
    );
}
