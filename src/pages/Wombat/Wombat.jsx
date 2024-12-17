import { Link } from "react-router-dom";
import wombatImg from "../../img/wombat.png";
import "./Wombat.css";

function Wombat() {
	return (
		<div className="wombat">
			<h1 className="wombat__title">Вы нашли вомбата!</h1>
			<div className="wombat__description">
				Спасибо. Можете вернуться на главную страницу.
			</div>
			<Link to="/" className="wombat__button">
				Вернуться на главную
			</Link>
			<img className="wombat__img" src={wombatImg} alt="Вомбат" />
		</div>
	);
}

export default Wombat;
