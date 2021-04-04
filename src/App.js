import OrderProvider from './contexts/OrderContext'
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
  <OrderProvider>
    <ResetStyles />
    <GlobalStyles />
    <Router>
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
  </OrderProvider>
)

export default App
