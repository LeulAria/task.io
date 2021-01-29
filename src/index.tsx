import { Suspense, lazy, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const Home = lazy(() => import('./pages/Home'))

render(
  <StrictMode>
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();