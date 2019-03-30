import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {

    render() {
        return (
            <div id={this.props.item.id}>
                <h2>Item: {this.props.item.name}</h2>
                <h2>Quantity: {this.props.item.quantity}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      items: state.items
    }
  }

export default connect(mapStateToProps)(Item)
  