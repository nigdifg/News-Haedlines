
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { Component } from 'react';
import Navbar from './comonent/Navbar';
import Newscomponet from './comonent/Newscomponet';
import Newsitem from './comonent/Newsitem';

export default class App extends Component {

  render() {
    return (

      <>
      <Navbar />
      <Newscomponet />
      </>
    )
  }
}


