import React, {PropTypes} from 'react';
import BasketItem from './BasketItem';

class BasketList extends React.Component {

    constructor(props) {
        super(props);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.state = {
            basketItems: {},
            total: {},
            grandTotal: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            basketItems: nextProps.basketItems,
            items: nextProps.items
        }, this.calculateTotal());
    }

    calculateTotal(){
        let total = {};
        let grandTotal = 0;
        Object.keys(this.state.basketItems).map(basketItem => {
            if (this.state.basketItems[basketItem]) {
                const item = this.state.items.find(x => x.name === basketItem);
                if (item.offer) {
                    const itemOfferTotal = item.offer.calculation(item, this.state.basketItems[basketItem]);
                    total[basketItem] = {
                        total: itemOfferTotal.total,
                        count: this.state.basketItems[basketItem],
                        appliedDiscount: itemOfferTotal.appliedDiscount
                    };
                    grandTotal += itemOfferTotal.total;
                } else {
                    let itemTotal = item.price * this.state.basketItems[basketItem];
                    total[basketItem] = {
                        total: itemTotal,
                        count: this.state.basketItems[basketItem]
                    };
                    grandTotal += itemTotal;
                }
            }
            return [];
        });
        this.setState({total, grandTotal});
    }

    render() {
        return (
        <div>
            {this.state.grandTotal > 0 &&
                <div className="basket">
                    <ul className="basket__items">
                        {Object.keys(this.state.total).sort().map(item =>
                            <li key={item}>
                                <BasketItem
                                    item={this.state.items.find(x => x.name === item)}
                                    total={this.state.total[item]}
                                />
                            </li>
                        )}
                    </ul>
                    <span className="basket__total">
                        Total {Math.floor(this.state.grandTotal * 100) / 100}{this.state.items && this.state.items[0].currency}
                    </span>
                </div>
            }
            </div>
        );
    }
};

BasketList.propTypes = {
    items: PropTypes.array.isRequired,
    basketItems: PropTypes.object.isRequired
};

export default BasketList;
