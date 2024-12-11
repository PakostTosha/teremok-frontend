import darkLogoImg from "../../img/logo-dark.svg";
import "./Header.css";

function Header() {
	// Проверка авторизации
	const isAuth = false;
	// Получение имени пользователя
	const user = {
		name: "Авторизованный Енот",
	};

	return (
		<header>
			<div className="container">
				<ul className="nav">
					<li className="nav__item logo">
						<a href="/">
							<img src={darkLogoImg} alt="Logo" />
						</a>
					</li>
					<li className="nav__item">
						<a href="/">Инструкция по тренажеру</a>
					</li>
					<li className="nav__item">
						<a href="/">Методические указания</a>
					</li>
					<li className="nav__item">
						<a href="/">Тренажер</a>
					</li>
					<li className="nav__item user">
						{/* Условный рендеринг имени пользователя, если авторизован */}
						<a href="/">{!isAuth ? "Войти" : user.name}</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
