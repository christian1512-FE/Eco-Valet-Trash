import { Navbar, Footer} from "./components";
import { Header, Contact, About, Services } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
   </div>
  );
}

export default App;

