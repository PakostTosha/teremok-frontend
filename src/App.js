import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import Main from "./pages/Main/Main.jsx";
import Registration from "./pages/Registr/Registration.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Wombat from "./pages/Wombat/Wombat.jsx";

function App() {
	return (
		<BrowserRouter>
			{/* Шапка */}
			<Header />
			<div className="container">
				<Routes>
					{/* Главная */}
					<Route path="/" element={<Main />} />

					{/* Инструкция по тренажёру */}
					{/* <Route path="/..." element={< />} /> */}

					{/* Методические указания */}
					{/* <Route path="/..." element={< />} /> */}

					{/* Тренажёр */}
					{/* <Route path="/..." element={< />} /> */}

					{/* Войти */}
					<Route path="/login" element={<Login />} />
					<Route path="/registr" element={<Registration />} />
					{/* <Route path="/profile" element={< />} /> */}

					{/* Потерянный вомбат */}
					{/* Сделать страницу с потерянный вомбатом и поставить ссылку на неё в компоненте NotFound (.wombat__action)*/}
					<Route path="/wombat" element={<Wombat />} />

					{/* Сраница не найдена */}
					<Route path="/notfound" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/notfound" replace />} />
				</Routes>
				{/* Подвал */}
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
