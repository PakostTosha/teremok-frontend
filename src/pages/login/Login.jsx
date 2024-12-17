import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginInitialValues, loginSchema } from "../../components/Form/helpers";
import Input from "../../components/Input/Input";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: loginInitialValues,
		mode: "onChange",
		resolver: yupResolver(loginSchema),
	});

	// В дальнейшем
	const onSubmit = (data) => {
		alert(JSON.stringify(data, null, 2));
		// В дальнейшем данные "data" отправляются на сервер для авторизации
		// ...
	};

	return (
		<div className="form-wrapper">
			<div className="wrapper__content">
				<form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="form__title">Введите логин и пароль для входа</h1>
					<Input
						name="email"
						labelText="Логин (почта, которую указывали при регистрации)"
						placeholder="Введите почту"
						register={register}
						errors={errors}
					/>
					<Input
						name="password"
						labelText={"Пароль"}
						placeholder={"Введите пароль"}
						register={register}
						errors={errors}
						type={"password"}
					/>
					<button type="submit" className="form__button button-hovered">
						Войти
					</button>
				</form>
			</div>
			<div className="border"></div>
			<div className="wrapper__footer footer">
				<div className="footer__title">
					У вас еще нет своего профиля? Регистрируйтесь по кнопке ниже!
				</div>
				<Link to="/registr" className="footer__button button-hovered">
					Регистрация
				</Link>
			</div>
		</div>
	);
}

export default Login;
