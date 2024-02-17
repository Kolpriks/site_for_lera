import Footer from "../components/footer/Footer";

import Portfolio from "../components/portfolio/Portfolio";
import Price from "../components/price/Price";
import Steps from "../components/steps/Steps";
import Team from "../components/team/Team";
import WhyAs from "../components/whyus/WhyUs";
import Main from  '../components/Main/Main'

export default function Home() {
	return (
		<div className="All">
			<Main/>

			<WhyAs/>
			<Portfolio/>
			<Steps/>
			<Price/>
			<Team/>
			<Footer/>
		</div>
	);
}
