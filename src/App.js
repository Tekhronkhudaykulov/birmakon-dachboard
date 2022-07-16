import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// // Containers
const TheLayout = React.lazy(() => import("./views/containers/TheLayout"));

// const Auth = React.lazy(() => import("./views/pages/auth/auth"));
// const token = false;
// // Pages
// const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
// const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            // render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            // render={(props) => <Page500 {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
