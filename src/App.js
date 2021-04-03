import ResetStyles from './styles/reset'
import GlobalStyles from './styles/global'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Landing from './pages/Landing'
import TipoDeMassa from './pages/TipoDeMassa'

const App = () => (
  <Router>
    <ResetStyles />
    <GlobalStyles />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/tipo-de-massa">
        <TipoDeMassa />
      </Route>
    </Switch>
  </Router>
)

export default App
