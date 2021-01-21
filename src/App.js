import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "100vh",
    }
  };

  return (
    <Router>
      <div className='wrapper'>
        <Sidebar />
        <AnimatePresence>
          <Switch>
            <Route path='/about' render={() => <About vars={pageVariants} />}></Route>
            <Route path='/' render={() => <Home vars={pageVariants} />}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
