import { Switch, Route } from "react-router";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
