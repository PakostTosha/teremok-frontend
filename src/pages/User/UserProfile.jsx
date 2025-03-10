import "./UserProfile.css";
import { useAuth } from "../../components/AuthContext/AuthContext";
import ParentForm from "../../components/ParentForm/ParentForm";
import ChildForm from "../../components/ChildForm/ChildForm";
import { useState } from "react";

function UserProfile() {
	const { user } = useAuth();
	const [typeUserForm, setTypeUserForm] = useState("parent");
	const [modeChildForm, setModeChildForm] = useState("change");
	const [selectedChild, setSelectedChild] = useState({});

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
			break;
	}

	return <div className="profile-wrapper">{displayedForm}</div>;
}

export default UserProfile;
