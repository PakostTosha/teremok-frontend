import * as Yup from "yup";

export const loginSchema = Yup.object({
	email: Yup.string()
		.email("Неверный формат email. Пример: example@mail.ru")
		.required("Введите email"),
	password: Yup.string()
		.min(5, "Небоходимо ввести от 5 до 50 символов")
		.max(50, '"Небоходимо ввести от 5 до 50 символов"')
		.required("Введите пароль"),
});

export const loginInitialValues = {
	email: "",
	password: "",
};

export const registrationSchema = Yup.object({
	email: Yup.string()
		.email("Неверный формат email. Пример: example@mail.ru")
		.required("Введите email"),
	password: Yup.string()
		.min(5, "Небоходимо ввести от 5 до 50 символов")
		.max(50, '"Небоходимо ввести от 5 до 50 символов"')
		.required("Введите пароль"),
	firstName: Yup.string()
		.min(2, "Введите хотя бы 2 символа")
		.required("Введите имя"),
	lastName: Yup.string()
		.min(2, "Введите хотя бы 2 символа")
		.required("Введите фамилию"),
	patronymic: Yup.string().min(2, "Введите хотя бы 2 символа"),
});

export const registrationInitialValues = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	patronymic: "",
};
