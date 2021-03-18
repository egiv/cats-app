import './App.css';

import { Switch, Route } from 'react-router-dom';
import Cats from '../components/Cats';

function App() {
  return (
    <Switch>
      <Route path="/" component={Cats} />
      <Route path="*">404</Route>
    </Switch>
  );
}

export default App;
