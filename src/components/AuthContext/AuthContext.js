import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../Loading/Loading.jsx";

// Context API позволяет хранить информацию пользователя в одном месте и передавать их без необходимости прокидывать пропсы на каждом уровне
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	// Состояние данных пользователя (по умолчанию - пусто)
	const [user, setUser] = useState(null);
	// Состояние аутентификации пользователя (по умолчанию - не аутентифицирован)
	const [isAuth, setIsAuth] = useState(false);
	// Состояние загрузки/выполнения запроса
	const [isLoading, setIsLoading] = useState(true);

	// Вспомогательные функции управления состояниями
	const login = (userData) => {
		setUser(userData);
		setIsAuth(true);
		setIsLoading(false);
	};
	const logout = () => {
		setUser(null);
		setIsAuth(false);
		setIsLoading(true);
		window.localStorage.removeItem("Authorization");
	};

	// Запрос на аутентификацию пользователя по JWT при загрузке страницы
	useEffect(() => {
		if (user == null) {
			try {
				const localStorageJWT = window.localStorage.getItem("Authorization");
				if (localStorageJWT) {
					// Запрос на аутентификацию пользователя по ключу
					axios
						.get("http://localhost:4444/profile", {
							headers: { Authorization: localStorageJWT },
						})
						.then((res) => {
							const userData = res.data.user;
							login(userData);
						})
						.catch((err) => {
							console.log(err);
							logout();
						});
				}
			} catch (err) {
				console.log("Ошибка во время получения JWT");
			}
		}
		setIsLoading(false);
	}, [user]);

	return (
		<AuthContext.Provider
			value={{ user, isAuth, isLoading, login, logout, setIsLoading }}
		>
			{/* Отображает лоудер при статусе "загрузка" */}
			{isLoading ? <Loading /> : children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
