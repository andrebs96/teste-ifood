import ResetStyles from './styles/reset'
import GlobalStyles from './styles/global'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Landing from './pages/Landing'
import Pedido from './pages/Pedido'

const App = () => (
  <Router>
    <ResetStyles />
    <GlobalStyles />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/pedido">
        <Pedido />
      </Route>
      <Route path="*">
        <Landing />
      </Route>
    </Switch>
  </Router>
)

export default App
