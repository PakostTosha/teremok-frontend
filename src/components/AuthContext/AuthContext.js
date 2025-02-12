import { createContext, useContext, useState } from "react";

// Context API позволяет хранить информацию пользователя в одном месте и передавать их без необходимости прокидывать пропсы на каждом уровне
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	// Состояние данных пользователя (по умолчанию - пусто)
	const [user, setUser] = useState(null);
	// Состояние аутентификации пользователя (по умолчанию - не аутентифицирован)
	const [isAuth, setIsAuth] = useState(false);

	// Вспомогательные функции управления состояниями
	const login = (userData) => {
		setUser(userData);
		setIsAuth(true);
	};
	const logout = () => {
		setUser(null);
		setIsAuth(false);
		window.localStorage.removeItem("Authorization");
	};

	return (
		<AuthContext.Provider value={{ user, isAuth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
