import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Price from "./components/price/Price";
import Steps from "./components/steps/Steps";
import Team from "./components/team/Team";
import WhyAs from "./components/WhyUs";

function App() {
	return (
		<div className="All">
			<Header/>
			<WhyAs/>
			<Portfolio/>
			<Steps/>
			<Price/>
			<Team/>
			<Footer/>
		</div>
	);
}

export default App;