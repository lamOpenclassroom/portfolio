import Header from "./components/Header";
import Propos from "./pages/Propos";
import Footer from "./components/Footer"
import "./assets/style/App.scss"

function App() {
  return (
    <div className="my-app">
      <Header />
      <Propos />
      <Footer/>
    </div>
  );
}

export default App;
