import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../redux/actions/itemsActions'
import Item from '../components/Item'

class ItemContainer extends Component {

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId)
  }

  render() { 
    return (
      <div>
        <Item item={this.props.items} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    item: state.items.item
  })

const mapDispatchToProps = dispatch => {
    return {
      fetchItem: (itemId) => dispatch(fetchItem(itemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
