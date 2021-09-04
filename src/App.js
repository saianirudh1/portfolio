import { Switch, Route } from "react-router";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
