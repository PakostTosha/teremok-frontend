import lightLogoImg from "../../img/logo-light.svg";
import "./Footer.css";

function Footer() {
	const curYear = new Date().getFullYear();
	return (
		<footer>
			<div className="container">
				<a className="logo" href="/">
					<img src={lightLogoImg} alt="Logo" />
				</a>
				<p className="copyright">Teremok - web trainer © {curYear}</p>
			</div>
		</footer>
	);
}

export default Footer;
