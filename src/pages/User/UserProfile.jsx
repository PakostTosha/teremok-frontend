import "./UserProfile.css";
import { useAuth } from "../../components/AuthContext/AuthContext";
import ParentForm from "../../components/ParentForm/ParentForm";
import ChildForm from "../../components/ChildForm/ChildForm";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

function UserProfile() {
	const { user, isLoading, setUser, setIsLoading, logout, setIsDataUpdated } =
		useAuth();
	const [typeUserForm, setTypeUserForm] = useState("parent");
	const [modeChildForm, setModeChildForm] = useState("change");
	const [selectedChild, setSelectedChild] = useState({});

	// В любом случае писать запрос на получение данных родителя с сервера, т.к. операции создание/изменение/удаление ребёнка обновляют запись в БД
	useEffect(() => {
		try {
			axios
				.get("http://localhost:4444/profile", {
					headers: { Authorization: window.localStorage.getItem("Authorization") },
				})
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {});
		} catch (error) {}
	}, [typeUserForm]);

	user ? setIsLoading(false) : setIsLoading(true);
	// Пока запрос выполняется - лоадер
	if (isLoading) {
		return <Loading />;
	}

	// Переключение между отображаемыми формами
	let displayedForm;
	switch (typeUserForm) {
		case "parent":
			// Форма родителя
			displayedForm = (
				<ParentForm
					user={user}
					setTypeUserForm={setTypeUserForm}
					setModeChildForm={setModeChildForm}
					setSelectedChild={setSelectedChild}
					selectedChild={selectedChild}
				/>
			);
			break;
		case "child":
			// Форма ребёнка с модом (change - изменить данные, add - добавить ребёнка)
			displayedForm = (
				<ChildForm
					mode={modeChildForm}
					setTypeUserForm={setTypeUserForm}
					selectedChild={selectedChild}
				/>
			);
			break;
		default:
			setIsDataUpdated(true);
			break;
	}

	return <div className="profile-wrapper">{displayedForm}</div>;
}

export default UserProfile;
