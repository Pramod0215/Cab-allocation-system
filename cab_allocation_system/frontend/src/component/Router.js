import React from 'react';
import { Route } from 'react-router-dom';
import {Home, Driver, User,Setting}from './index.js';



const BaseRouter = () => (
    <div>

        <Route exact path='/' component={Home} />  
        <Route exact path='/users' component={User} />
        <Route exact path='/drivers' component={Driver}/> 
        <Route exact path='/settings' component={Setting} /> 
        <Route exact path='/home' component={Home} />
       
        
    </div>
);


export default BaseRouter;