import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Chat from './components/Chat.js';
import Join from './components/Join.js';


const App = () => {
    return (
        <BrowserRouter>
          <Route path = "/" exact component = {Join} />
          <Route path = "/chat" component = {Chat} /> 

        </BrowserRouter>
    )
}
export default App;