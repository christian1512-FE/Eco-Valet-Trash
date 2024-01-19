import { Navbar, Footer} from "./components";
import { Header, Contact, About, Services, Association } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-color">
      <Navbar />
      <Header />
      </div>
      <About />
      <Services />
      <Association />
      <Contact />
      <Footer />
   </div>
  );
}

export default App;

