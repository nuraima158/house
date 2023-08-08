import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Info from "./pages/Info/Info";
import Contacts from "./pages/Contacts/Contacts";
import Sign from "./pages/Sign/Sign";
import Myaccount from "./pages/Myaccount/Myaccount";
import Createnew from "./pages/Createnew/Createnew";
import Buy from "./pages/Buy/Buy";
import Header from './components/header/Header'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Info />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/createnew" element={<Createnew />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </div>
  );
}

export default App;
