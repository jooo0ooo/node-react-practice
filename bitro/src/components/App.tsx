import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AddTransaction from './views/Content/AddTransaction/AddTransaction';
import Home from './views/Content/Home/Home';
import Login from './views/Content/Login/Login';
import MyTransaction from './views/Content/MyTransaction/MyTransaction';
import Setting from './views/Content/Setting/Setting';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={(<div>Loading...</div>)}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTransaction} />
          <Route exact path="/mine" component={MyTransaction} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
