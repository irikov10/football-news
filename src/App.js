import { Routes, Route } from 'react-router-dom';

import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import { CreateArticle } from './components/CreateArticle/CreateArticle';
import DailyNews from './components/DailyNews/DailyNews';
import { EditArticle } from './components/EditArticle/EditArticle';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PlayersDetails from './components/PlayerDetails/PlayersDetails';
import Register from './components/Register/Register';
import Transfers from './components/Transfers/Transfers';
import { Logout } from './components/Logout/Logout'
import { AuthProvider } from './contexts/AuthContext';
import { ArticlesProvider } from './contexts/ArticleContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ArticlesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dailyNews" element={<DailyNews />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/details/articles/:articleId" element={<ArticleDetails />} />
            <Route path="/details/players/:playerId" element={<PlayersDetails />} />
            <Route path="/create" element={<CreateArticle />} />
          </Routes>
          <Footer />
        </ArticlesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
