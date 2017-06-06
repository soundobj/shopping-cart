import React, {PropTypes} from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        this.props.addBasketItem(this.props.item.name);
    }

    render() {
        let item = this.props.item;
        return (
            <div className="shopping__item">
                <span className="shopping__item__name">{item.name}</span>
                <span className="shopping__item__price">{item.price}{item.currency}</span>
                <button className="shopping__item__add" onClick={this.addItem}>Add</button>
            </div>
        );
    }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;