import React, { Component } from 'react'

class AddItem extends Component {
    
    render() {
        const { handleChange, input, handleSubmit } = this.props
        return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add an Item</label>
                    <input type="name"value={input.name} onChange={handleChange} />
                    <input type="quantity"value={input.quantity} onChange={handleChange} />
                    <input type="submit" />
            </form>
        </div>
      )
    }
}

export default AddItem