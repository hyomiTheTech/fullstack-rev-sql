import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      id: 0
    }
    this.getLists = this.getLists.bind(this)
  }

  componentDidMount() {
    this.getLists()
  }

  getLists() {
    axios.get('/products').then((response) => {
      this.setState({
        lists: response.data
      })
    })
  }

  idGrabber(id) {
    this.setState({
      id: id
    })
  }
  render() {

    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container"><br />
            <ProductViewer lists={this.state.lists} id={this.state.id} refresh={this.getLists} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList lists={this.state.lists} id={this.idGrabber.bind(this)} />
            {/* {console.log(this.state)} */}
          </div>
        </div>
      </div>
    )
  }
}
