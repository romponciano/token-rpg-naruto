import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'

for(var i=1; i < 91; i++) {
    require(`./images/background/${i}.jpg`)
}

render(<App />, document.getElementById('root'))
