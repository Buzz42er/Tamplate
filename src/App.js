import Header from './components/main-components/Header';
import './dist/css/App.css';
import Nav from './components/main-components/Nav';
import Main from './components/main-components/Main';
import Footer from './components/main-components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
