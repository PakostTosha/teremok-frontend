import "./Header.css";
import darkLogoImg from "../../img/logo-dark.svg";
import logoutImg from "../../img/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";
import { useEffect } from "react";

function Header() {
	// Получение информации об авторизации и пользователе из состояния приложения
	const { isAuth, user, logout, login } = useAuth();
	const navigate = useNavigate();

	// Запрос на аутентификацию пользователя по JWT при загрузке страницы
	useEffect(() => {
		try {
			const localStorageJWT = window.localStorage.getItem("Authorization");
			if (localStorageJWT) {
				// Запрос на аутентификацию пользователя по ключу
				axios
					.get("http://localhost:4444/profile", {
						headers: { Authorization: localStorageJWT },
					})
					.then((res) => {
						const { user } = res.data;
						login(user);
					})
					.catch((err) => {
						console.log(err);
						logout();
					});
			} else {
				console.log("Нет");
			}
		} catch (err) {
			console.log("Ошибка во время получения JWT");
		}
	}, []);

	// Обработчик кнопки выхода из аккаунта
	const handlerLogout = () => {
		if (
			window.confirm(
				"Вы уверены, что хотите выйти из аккаунта? После выхода потребуется повторная авторизация."
			)
		) {
			logout();
			navigate("/");
		}
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
									{`${user.firstName} ${user.lastName}`}
								</Link>
							</li>
							<li className="nav__item logout" onClick={handlerLogout}>
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
