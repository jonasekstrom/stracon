import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from './components/Landing/Landing';

import Assignments from './components/Assignments/Assignments';
import Career from "./components/Career/Career";
import Contact from './components/Contact/Contact';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <Router>
    <div className="container-fluid p-0">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/uppdrag" component={Assignments} />
        <Route exact path="/karriar" component={Career} />

        <Route exact path="/om-oss" component={About} />
        <Route exact path="/kontakta-oss" component={Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
