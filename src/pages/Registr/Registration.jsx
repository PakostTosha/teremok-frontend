import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	registrationInitialValues,
	registrationSchema,
} from "../../components/Form/helpers";
import Input from "../../components/Input/Input";
import "./Registration.css";
import "../Login/Login.css";
import { Link } from "react-router-dom";

function Registration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		resetField,
	} = useForm({
		defaultValues: registrationInitialValues,
		mode: "all",
		resolver: yupResolver(registrationSchema),
	});

	// В дальнейшем доработать функцию с отправкой данных на бэкенд
	const onSubmit = (data) => {
		const { password, confirmPassword } = data;
		if (password !== confirmPassword) {
			["confirmPassword", "password"].forEach((name) => {
				console.log(name);
				setError(name, {
					type: "custom",
					message: "Ваши пароли не совпадают",
				});
				resetField(name, { keepError: true });
			});
			return;
		}
		alert(JSON.stringify(data, null, 2));
		// В дальнейшем данные "data" отправляются на сервер для регистрации
		// ...
	};

	return (
		<div className="form-wrapper registration">
			<div className="wrapper__content">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="form__title">Регистрация</h1>
					<Input
						name="firstName"
						labelText="Ваше имя *"
						placeholder="Имя"
						register={register}
						errors={errors}
					/>
					<Input
						name="lastName"
						labelText="Ваша фамилия *"
						placeholder="Фамилия"
						register={register}
						errors={errors}
					/>
					<Input
						name="patronymic"
						labelText="Ваше отчество (необязательно)"
						placeholder="Отчество"
						register={register}
						errors={errors}
					/>
					<Input
						name="email"
						labelText="Почтовый ящик *"
						placeholder="Введите почту"
						register={register}
						errors={errors}
					/>
					<Input
						name="password"
						labelText={"Придумайте пароль (от 5 до 50 символов)*"}
						placeholder={"Введите пароль"}
						register={register}
						errors={errors}
						type={"password"}
					/>
					<Input
						name="confirmPassword"
						labelText={"Введите пароль повторно*"}
						placeholder={"Введите пароль"}
						register={register}
						errors={errors}
						type={"password"}
					/>
					{/* Опционально: добавить загрузку файла аватарки на сервер */}

					<button type="submit" className="form__button button-hovered">
						Зарегистрироваться
					</button>
				</form>
			</div>
			<div className="border"></div>
			<div className="wrapper__footer footer">
				<div className="footer__title">
					Уже есть свой профиль? Войдите по кнопке ниже!
				</div>
				<Link to="/login" className="footer__button button-hovered">
					Войти
				</Link>
			</div>
		</div>
	);
}

export default Registration;
