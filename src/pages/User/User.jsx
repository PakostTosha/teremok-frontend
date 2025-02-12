import Input from "../../components/Input/Input";
import "./UserProfile.css";
import { useForm } from "react-hook-form";

function UserProfile() {
	return (
		<div className="profile-wrapper">
			<h1 className="title profile-wrapper__title">Личный кабинет родителя</h1>
			<form className="user-info" onSubmit={console.log("Данные сохранены")}>
				<div className="field">
					<label>Фамилия</label>
					<input type="text" value={"Surname"} />
					<div className="error">
						<p>Ошибка! Данное поле не может быть пустым.</p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default UserProfile;
