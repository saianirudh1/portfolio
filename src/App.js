import { Switch, Route, Redirect } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="">
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
