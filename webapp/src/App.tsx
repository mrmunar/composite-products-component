import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';

import Container from './components/containers/main';
import AddCompositeProducts from './pages/CompositeProducts/Add';
import EditCompositeProducts from './pages/CompositeProducts/Edit';
import ListCompositeProducts from './pages/CompositeProducts/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <Router>
            <Switch>
              <Route path="/add" component={AddCompositeProducts} />
              <Route path="/:id" component={EditCompositeProducts} />
              <Route path="/" component={ListCompositeProducts} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
