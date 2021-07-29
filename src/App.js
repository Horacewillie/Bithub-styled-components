import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Footer} from './components'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'
import Scroll from './components/Scroll'
import GlobalStyle from './globalStyles'

function App(){
    return(
        
        <Router>
            <GlobalStyle />
            <Scroll />
            <Navbar />
            <Switch>
                <Route path = '/' exact component = {Home}/>
                <Route path = '/services' exact component = {Services}/>
                <Route path = '/products' exact component = {Products}/>
                <Route path = '/sign-up' exact component = {SignUp}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App 