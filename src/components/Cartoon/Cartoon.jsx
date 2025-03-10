import { Link } from "react-router-dom";

function Cartoon({ cards }) {
	return (
		<div className="cartoon">
			<div className="title">Поздравляю!</div>
			<div className="cartoon-wrapper">
				<p className="info">
					Ты успешно выполнил все задания и собрал желаемые карточки:
				</p>
				<ul className="card-list">
					{cards.map((card) => {
						return (
							<li className="card-item" key={card.id}>
								<img className="card-img" src={card.src} alt={card.alt} />
							</li>
						);
					})}
				</ul>
				<p className="awards">
					В качестве дополнительной награды ты можешь посмотреть мультик
				</p>
				<div className="video-content">
					<iframe
						title="cartoon"
						width="720"
						height="405"
						src="https://rutube.ru/play/embed/79ef269a1dc7804e8cede2bbf5ede02b/"
						frameBorder="0"
						allow="clipboard-write; autoplay"
						webkitAllowFullScreen
						mozallowfullscreen
						allowFullScreen
					></iframe>
				</div>
				<Link className="button-common" to="/main">
					В главное меню
				</Link>
			</div>
		</div>
	);
}

export default Cartoon;
