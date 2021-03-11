import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AddTransaction from './components/views/Content/AddTransaction/AddTransaction';
import Home from './components/views/Content/Home/Home';
import MyTransaction from './components/views/Content/MyTransaction/MyTransaction';
import Setting from './components/views/Content/Setting/Setting';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={(<div>Loading...</div>)}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTransaction} />
          <Route exact path="/mine" component={MyTransaction} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
