import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainPage from "./components/mainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <MainPage />
      <Sidebar />
    </div>
  );
};

export default App;
