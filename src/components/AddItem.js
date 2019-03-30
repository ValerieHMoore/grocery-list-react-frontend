import React, { Component } from 'react'

class AddItem extends Component {
    
    render() {
        const { handleChange, name, quantity, handleSubmit } = this.props
        return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add an Item</label>
                    <input name="name" value={name} onChange={handleChange} />
                    <input name="quantity" value={quantity} onChange={handleChange} />
                    <input type="submit" />
            </form>
        </div>
      )
    }
}

export default AddItem