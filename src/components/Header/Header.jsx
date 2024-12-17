import "./Header.css";
import darkLogoImg from "../../img/logo-dark.svg";
import logoutImg from "../../img/logout.svg";
import { Link } from "react-router-dom";

function Header() {
	// Проверка авторизации
	const isAuth = false;
	// Получение имени пользователя
	const user = {
		name: "Антон Поляков",
	};

	return (
		<header>
			<div className="container">
				<ul className="nav">
					<li className="nav__item logo">
						<Link to="/" title="На главную">
							<img src={darkLogoImg} alt="Logo" />
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/">Инструкция по тренажеру</Link>
					</li>
					<li className="nav__item">
						<Link to="/">Методические указания</Link>
					</li>
					<li className="nav__item">
						<Link to="/">Тренажер</Link>
					</li>
					{/* Условный рендер навигации для авторизованных пользователей */}
					{isAuth ? (
						<>
							<li className="nav__item user">
								<Link to="/user" title="Личный кабинет">
									{user.name}
								</Link>
							</li>
							{/* onClick = Подтверждение.OK? Удалить JWT из localStorage, направить на главную страницу */}
							<li className="nav__item logout">
								<Link to="/" title="Выйти из аккаунта">
									<img src={logoutImg} alt="Logout" />
								</Link>
							</li>
						</>
					) : (
						<li className="nav__item user">
							<Link to="/login" title="Войти в личный кабинет">
								Войти
							</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
}

export default Header;
