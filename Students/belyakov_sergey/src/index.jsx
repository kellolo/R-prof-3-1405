import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import initStore from './store/store.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import './layout/style/main.css'

import {BrowserRouter} from 'react-router-dom'
import Router from './router.jsx'

ReactDom.render(
  <Provider store={initStore()}>
    <BrowserRouter>
      <CssBaseline>
        <Router/>
      </CssBaseline>
    </BrowserRouter>
  </Provider>

  ,
  document.querySelector('#app')
)