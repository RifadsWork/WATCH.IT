import { AllRoutes } from './routes/AllRoutes';
import { Header,Footer } from './components/index';
import './App.css';

function App() {
  return (
    <div className="App bg-stone-200 dark:bg-stone-900">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
