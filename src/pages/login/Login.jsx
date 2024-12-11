import { Formik, Form, useFormik } from "formik";
import Input from "../../components/Input/Input";
import { loginInitialValues, loginSchema } from "../../components/Form/helpers";
import "./Login.css";

function Login() {
	return (
		<div className="form-wrapper">
			<div className="login__content">
				<Formik
					initialValues={loginInitialValues}
					validationSchema={loginSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					<Form className="login__form form">
						<h1 className="form__title">Введите логин и пароль для входа</h1>
						<Input
							id={"email"}
							label={"Логин (почта, которую указывали при регистрации)"}
							name={"email"}
							placeholder={"Ваша почта"}
							type={"email"}
						/>
						<Input
							id={"password"}
							label={"Пароль (от 5 до 50 символов)"}
							name={"password"}
							placeholder={"Пароль"}
							type={"password"}
						/>
						<button type="submit" className="form__button button-hovered">
							Войти
						</button>
					</Form>
				</Formik>
			</div>
			<div className="border"></div>
			<div className="login__footer footer">
				<div className="footer__title">
					У вас еще нет своего профиля? Регистрируйтесь по кнопке ниже!
				</div>
				<a href="/" className="footer__button button-hovered">
					Регистрация
				</a>
			</div>
		</div>
	);
}

export default Login;
