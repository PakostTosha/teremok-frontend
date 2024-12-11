import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/login/Login.jsx";
import Main from "./pages/main/Main.jsx";

function App() {
	return (
		<>
			{/* Шапка */}
			<Header />
			<div className="container">
				{/* Главная */}
				{/* <Main /> */}
				{/* Инструкция по тренажёру */}
				{/* Методические указания */}
				{/* Тренажёр */}
				{/* Войти */}
				<Login />
				{/* Подвал */}
			</div>
			<Footer />
		</>
	);
}

export default App;
