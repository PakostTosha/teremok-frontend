import { useForm } from "react-hook-form";
import ProfileField from "../ProfileField/ProfileField";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../YupValidation/helpers";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";

function ParentForm({
	user,
	setTypeUserForm,
	setModeChildForm,
	setSelectedChild,
	selectedChild,
}) {
	// Для компонентов профиля ребёнка и родителя понадобатся useForm
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: user,
		mode: "all",
		resolver: yupResolver(profileSchema),
	});

	useEffect(() => {
		if (user) {
			reset(user);
		}
	}, [user, reset]);

	const { login } = useAuth();

	// Сохранение информации пользователя из формы
	const saveUserInfo = async (userInfoData) => {
		if (window.confirm("Уверены, что хотите сохранить изменения?")) {
			console.log(userInfoData);

			const { firstName, lastName, patronymic, avatarUrl, telephone, _id } =
				userInfoData;

			const changedUser = {
				firstName,
				lastName,
				patronymic,
				avatarUrl,
				telephone,
				_id,
			};

			// Собирается инфа и отправляется на сервер post запросом об обновлении записи
			await axios
				.patch("http://localhost:4444/changeProfile", changedUser, {
					headers: {
						Authorization: window.localStorage.getItem("Authorization"),
					},
				})
				.then((req) => {
					if (req.statusText === "OK") {
						alert("Данные успешно сохранены!");
						login(userInfoData);
					} else alert("Не удалось сохранить данные");
				})
				.catch((err) => {
					console.error(err);
					alert("Во время сохранения изменений возникла ошибка");
				});
		}
	};

	// Проверка наличия пользователя
	const childrens = user ? user.childrens : [];

	const sendSelectedChild = () => {
		const selectChildrenElem = document.getElementById("children-list"); //тэг <select>, найденный по id в документе
		const childId = [selectChildrenElem.value]; //id выбранного ребёнка в списке
		const selectedChildId = childrens[childId]; //находим ребёнка в списке по выбранному id
		setSelectedChild(selectedChildId); //устанавливаем выбранного ребёнка в состояние для дальнейшей работы с ним
	};

	return (
		<>
			{/* Форма родителя */}
			<h1 className="title profile-wrapper__title">Личный кабинет родителя</h1>
			<form className="user-info" onSubmit={handleSubmit(saveUserInfo)}>
				{/* Фамилия */}
				<ProfileField
					name={"lastName"}
					labelText={"Фамилия *"}
					placeholder={"Фамилия"}
					type={"text"}
					// value={user.lastName} заменяется на initialValue
					register={register}
					errors={errors}
				/>
				{/* Имя */}
				<ProfileField
					name={"firstName"}
					labelText={"Имя *"}
					placeholder={"Имя"}
					type={"text"}
					// value={user.lastName} заменяется на initialValue
					register={register}
					errors={errors}
				/>
				{/* Отчество */}
				<ProfileField
					name={"patronymic"}
					labelText={"Отчество"}
					placeholder={"Отчество"}
					type={"text"}
					// value={user.lastName} заменяется на initialValue
					register={register}
					errors={errors}
				/>
				{/* Телефон */}
				<ProfileField
					name={"telephone"}
					labelText={"Номер телефона"}
					placeholder={"X-XXX-XXX-XX-XX"}
					type={"text"}
					// value={user.lastName} заменяется на initialValue
					register={register}
					errors={errors}
				/>
				{/* Почта */}
				<ProfileField
					name={"email"}
					labelText={"Почта *"}
					placeholder={"e-mail"}
					type={"text"}
					// value={user.lastName} заменяется на initialValue
					register={register}
					errors={errors}
				/>
				<button type="submit" className="profile-button save">
					Сохранить изменения
				</button>
			</form>
			<div className="children-info">
				<h2>Список ваших зарегистрированных детей:</h2>
				{/* Если есть хоть 1 ребёнок - выпадающий список, иначе - список выключен */}
				{childrens.length > 0 ? (
					<select
						className="children-list"
						id="children-list"
						defaultValue={selectedChild}
					>
						{/* В объекте пользователя обращаемся к массиву детей */}
						{childrens.map((elem, index) => {
							return (
								<option
									key={index}
									value={index}
								>{`${elem.lastName} ${elem.firstName} ${elem.patronymic}`}</option>
							);
						})}
					</select>
				) : (
					<select className="children-list" id="children-list" disabled>
						<option selected>Нет зарегистрированных детей</option>
					</select>
				)}
				<div className="child-buttons">
					<button
						className="profile-button change-child"
						onClick={() => {
							sendSelectedChild();
							setTypeUserForm("child");
							setModeChildForm("change");
						}}
					>
						Изменить данные выбранного ребёнка
					</button>
					<button
						className="profile-button add-child"
						onClick={() => {
							setTypeUserForm("child");
							setModeChildForm("add");
						}}
					>
						Зарегистрировать нового ребёнка
					</button>
				</div>
			</div>
		</>
	);
}

export default ParentForm;
