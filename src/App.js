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
import { RouteGuard } from './components/common/RouteGard';
import { EditComment } from './components/EditComments/EditComments';

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
						<Route path="/details/articles/:articleId" element={
							<RouteGuard>
								<ArticleDetails />
							</RouteGuard>
						} />
						<Route path="/details/players/:playerId" element={
							<RouteGuard>
								<PlayersDetails />
							</RouteGuard>} />
						<Route path="/create" element={<CreateArticle />} />
						<Route path="/edit/:articleId" element={<EditArticle />} />
						<Route path="/editComment/:articleId/:commentId" element={<EditComment />} />
					</Routes>
					<Footer />
				</ArticlesProvider>
			</AuthProvider>
		</>
	);
}

export default App;
