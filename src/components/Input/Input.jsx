import "./Input.css";
import { Field, ErrorMessage } from "formik";

function Input({ id, label, name, placeholder, type }) {
	return (
		<div className="input-container">
			<label htmlFor={id}>{label}</label>
			<Field name={name} id={id} placeholder={placeholder} type={type} />
			<ErrorMessage name={name}>{(error) => <span>{error}</span>}</ErrorMessage>
		</div>
	);
}

export default Input;
