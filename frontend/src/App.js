import appStyles from "../src/styles/App.module.css";
import Header from "../src/components/Header.js";
import SearchInterface from "../src/components/SearchInterface.js";

function App() {
  return (
    <div className={appStyles}>
      <div id={appStyles.Main}>
        <Header />
        <SearchInterface />
      </div>
    </div>
  );
}

export default App;
