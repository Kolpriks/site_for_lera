import { Header } from "./components/Header";
import Portfolio from "./components/portfolio/Portfolio";
import WhyAs from "./components/WhyUs";

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
			<WhyAs/>
			<Portfolio/>
    </div>
  );
}

export default App;