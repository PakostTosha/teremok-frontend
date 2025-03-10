import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Login from "../../pages/Login/Login.jsx";
import Main from "../../pages/Main/Main.jsx";
import Registration from "../../pages/Registr/Registration.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import Wombat from "../../pages/Wombat/Wombat.jsx";
import UserProfile from "../../pages/User/UserProfile.jsx";
import { useAuth } from "../AuthContext/AuthContext.js";
import Loading from "../Loading/Loading.jsx";
import Trainer from "../../pages/Trainer/Trainer.jsx";
import Methodics from "../../pages/Methodics/Methodics.jsx";
import Instruction from "../../pages/Instruction/Instruction.jsx";

function AppContent() {
	const { isLoading } = useAuth();
	if (isLoading) return <Loading />;
	return (
		<BrowserRouter>
			{/* Шапка */}
			<Header />
			<div className="container">
				<Routes>
					{/* Переадресация */}
					<Route path="/" element={<Navigate to="/main" />} />

					{/* Сраница не найдена */}
					<Route path="/notfound" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/notfound" replace />} />
					{/* Найденный вомбат */}
					<Route path="/wombat" element={<Wombat />} />

					{/* Главная */}
					<Route path="/main" element={<Main />} />

					{/* Инструкция по тренажёру */}
					<Route path="/instruction" element={<Instruction />} />

					{/* Методические указания */}
					<Route path="/methodics" element={<Methodics />} />

					{/** Тренажёр
						TODO: 
						1) Главная страница тренажёра недоступен, если пользователь неавторизован (страница с сообщением о необходимости авторизации)
						2) Нет доступа для последующих страниц/компонентов, используемых в тренажёре (зависит от реализации работы функционала тренажёра). Если части тренажёра - компоненты, то необходимо хорошо проработать условный рендер этих компонентов, иначе части тренажёра - страницы, тогда необходимо описать приватные роуты для этих страниц (доступны, если пользователь авторизован)
						 */}
					<Route path="/trainer" element={<Trainer />} />

					{/* ------------------------------------------------------- */}
					{/* Приватные роуты (профиль и тд) 
						
						Описание компонента:
						---------------------------------
						const PrivateRoute = ({ element, ...rest }) => {
							const { isAuth } = useAuth();
							return (
								<Route
									{...rest}
									element={isAuthenticated ? element : <Navigate to="/login" />}
								/>
							);
						};
						---------------------------------

						Пример использования: <PrivateRoute path="/profile" element={<Profile />} />

						TODO: 
						1) Приватные роуты для страниц Login, Registr в том случае, если пользователь УЖЕ авторизован
						2) Приватные роуты для страницы Profile в том случае, если пользователь ЕЩЁ не авторизован
						*/}
					{/* Авторизация, регистрация, личный кабинет */}
					<Route path="/login" element={<Login />} />
					<Route path="/registr" element={<Registration />} />
					<Route path="/user" element={<UserProfile />} />
					{/* ------------------------------------------------------- */}
				</Routes>
			</div>
			{/* Подвал */}
			<Footer />
		</BrowserRouter>
	);
}

export default AppContent;
