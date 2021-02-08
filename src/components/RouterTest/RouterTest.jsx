import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Editorial from "../../pages/Editorial";
import ClientShooting from "../../pages/ClientShooting";
import ModelTests from "../../pages/ModelTests";

<Router>
    <Switch>
        <Route path='/editorial' component={Editorial}/>
        <Route path='/clientShooting' component={ClientShooting}/>
        <Route path='/modelTests' component={ModelTests}/>
        <div>
        </div>

    </Switch>
</Router>