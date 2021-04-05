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
import Recomendacao from './pages/Recomendacao'
import NotFound from './pages/NotFound'

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
        <Route path="/pizza-do-dia">
          <Recomendacao />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </OrderProvider>
)

export default App
