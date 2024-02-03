import { Header } from "./components/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Steps from "./components/steps/Steps";
import WhyAs from "./components/WhyUs";

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
			<WhyAs/>
			<Portfolio/>
			<Steps/>
    </div>
  );
}

export default App;