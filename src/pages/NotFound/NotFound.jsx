import { useNavigate } from "react-router-dom";
import wombat from "../../img/notfound.png";
import "./NotFound.css";

function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="losted">
			<h1 className="losted__title">Кажется, ты потерялся.</h1>
			<h2 className="losted__info">Страница не найдена.</h2>
			<div className="losted__content">
				<p className="losted__description">
					Раз ты тоже тут, не видел случайно потерянного вомбата? Сообщи, если
					найдёшь.
				</p>
				<div className="wombat">
					<img
						className="wombat__img"
						src={wombat}
						alt="Объявление о потерянном вомбате"
					/>
					<div className="wombat__action" onClick={() => navigate("/wombat")}></div>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
