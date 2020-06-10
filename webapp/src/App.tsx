import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from "react-redux";

import Container from './components/containers/main';
import AddEditCompositeProducts from './pages/CompositeProducts/AddEdit';
import ListCompositeProducts from './pages/CompositeProducts/List';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <Router>
            <Switch>
              <Route path="/add" component={AddEditCompositeProducts} />
              <Route path="/:id" component={AddEditCompositeProducts} />
              <Route path="/" component={ListCompositeProducts} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
