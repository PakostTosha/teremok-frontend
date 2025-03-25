import { useEffect, useState } from "react";

function HandClapTimer({ timeCount, setActiveComponent }) {
	// состояние таймера
	const [seconds, setSeconds] = useState(timeCount);
	const [isActive, setIsActive] = useState(false);
	// таймер через useEffect с функцией очистки
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				if (seconds <= 0) {
					setIsActive(false);
				} else {
					setSeconds((seconds) => seconds - 1);
				}
			}, 1000);
		} else if (!isActive && seconds === 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	return (
		<div className="hand-clap-timer">
			<h1 className="title">
				Молодец, ты решил задание, но с подсказкой. Давай похлопаем {timeCount} сек
				в ладоши, а затем решим эту же задачу заново!
			</h1>
			<div className="wrapper">
				<p className={`time ${seconds === 0 ? "end" : "start"}`}>
					{seconds === 0 ? "Время вышло!" : `0:${seconds}`}
				</p>
				<button
					className="button-common button"
					onClick={() => {
						seconds > 0 ? setIsActive(!isActive) : setActiveComponent("Task");
					}}
				>
					{seconds > 0 ? (isActive ? "Пауза" : "Старт") : "Выполнить задание заново"}
				</button>
			</div>
		</div>
	);
}

export default HandClapTimer;
