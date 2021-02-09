import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ClientShooting from "../../pages/ClientShooting";
import ModelTests from "../../pages/ModelTests";
import Editorial from "../../pages/Editorial";


const RouterTest = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Editorial}/>
                <Route path='/clientShooting' component={ClientShooting}/>
                <Route path='/modelTests' component={ModelTests}/>
                <div>
                </div>

            </Switch>
        </Router>
    )
}

export default RouterTest