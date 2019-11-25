import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.lists,
      clicked: false,
      newBid: 0
    }
  }

  newBidHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  newBidEntryHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  newBidPoster (id) {
    
    axios.put(`/products/${id}`, {
      curr_bid: this.state.newBid
    }).then(() => {
      this.props.refresh()
      this.newBidHandler()
    }).catch((err) => {console.log(err)})
  }

  render() {

    if (this.props.lists.length === 0) {
      return null
    } else if (this.props.id !== 0) {
      if (this.state.clicked === false) {
        return (
          <div className='product-viewer' align="left">
            <div>Item:
        {this.props.lists[this.props.id - 1].item}
            </div>
            <div >
              Current Bid: ${this.props.lists[this.props.id - 1].curr_bid}<button onClick={() => { this.newBidHandler() }}>New Bid?</button>
            </div >
            <div>
              Ends In: {this.props.lists[this.props.id - 1].ends_in} Days

    </div>
            <img src={this.props.lists[this.props.id - 1].image} height="300" width="300" />
          </div>)
      } else {
        return (
          <div className='product-viewer' align="left">
            <div>Item:
        {this.props.lists[this.props.id - 1].item}
            </div>
            <div >
              New Bid :<input name="newBid" type="text" onChange={(e) => { this.newBidEntryHandler(e)}} /><input onClick={() => {this.newBidPoster(this.props.id)}}type="submit" value="Submit" />
            </div >
            <div>
              Ends In: {this.props.lists[this.props.id - 1].ends_in} Days

    </div>
            <img src={this.props.lists[this.props.id - 1].image} height="300" width="300" />
          </div>)
      }
    } else {
      if (this.state.clicked === false) {
        return (
          <div className='product-viewer' align="left">
            <div>Item:
          {this.props.lists[0].item}
            </div>
            <div  >
              Current Bid: ${this.props.lists[0].curr_bid}<button onClick={() => { this.newBidHandler() }}>New Bid?</button>
            </div>
            <div>
              Ends In: {this.props.lists[0].ends_in} Days

      </div>
            <img src={this.props.lists[0].image} height="300" width="300" />
          </div>)
      } else {
        return (
          <div className='product-viewer' align="left">
            <div>Item:
          {this.props.lists[0].item}
            </div>
            <div  >
              New Bid :<input name="newBid" type="text" onChange={(e) => { this.newBidEntryHandler(e)}} /><input onClick={() => {this.newBidPoster(this.props.id)}} type="submit" value="Submit"/>
            </div>
              <div>
                Ends In: {this.props.lists[0].ends_in} Days
  
      </div>
              <img src={this.props.lists[0].image} height="300" width="300" />
            </div>)
        }
      }
  
  
    }
}