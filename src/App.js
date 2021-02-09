import './App.css';
import React from 'react';
import RouterTest from "./components/RouterTest/RouterTest";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {
    return (
        <RouterTest history={history}/>
    )
}

export default App;
