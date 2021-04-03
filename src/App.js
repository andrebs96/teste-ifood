import Landing from './components/Landing'
import ResetStyles from './styles/reset'
import GlobalStyles from './styles/global'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <ResetStyles />
    <GlobalStyles />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/tipo-de-massa">
        <Landing />
      </Route>
    </Switch>
  </Router>
)

export default App
