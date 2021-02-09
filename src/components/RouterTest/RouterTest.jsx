import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ClientShooting from "../../pages/ClientShooting";
import ModelTests from "../../pages/ModelTests";
import Editorial from "../../pages/Editorial";
    import Layout from "../Layout";


const RouterTest = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Editorial}/>
                    <Route path='/client' component={ClientShooting}/>
                    <Route path='/modelTests' component={ModelTests}/>
                </Switch>
            </Layout>
        </Router>
    )
}

export default RouterTest