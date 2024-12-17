import "./Input.css";

function Input({ name, labelText, placeholder, type, register, errors }) {
	return (
		<div className="input-container">
			<label htmlFor={name}>{labelText}</label>
			<input
				{...register(name)}
				id={name}
				placeholder={placeholder}
				type={type}
			></input>
			<span className="error">{errors[name]?.message}</span>
		</div>
	);
}

export default Input;
