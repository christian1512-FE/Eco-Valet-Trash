import { Navbar, Footer} from "./components";
import { Header, Contact, About, Services } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="top-level"> */}
      <Navbar />
      <Header />
      {/* </div> */}
      <About />
      <Services />
      <Contact />
      <Footer />
   </div>
  );
}

export default App;

