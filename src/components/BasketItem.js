import React, {PropTypes} from 'react';

const BasketItem = ({item, total}) => {
    return (
        <article className="basket__item">
            <section className="basket__item__metadata">
                <span className="basket__item__count">{total.count} x</span>
                <span className="basket__item__name">{item.name}</span>
                <span className="basket__item__price">@ {item.price}{item.currency}</span>
            </section>
            {total.appliedDiscount &&
                <footer className="basket__item__offer">
                    <span className="basket__item__discount">{item.offer.name}</span>
                    <span className="basket__item__saving">Saved {total.appliedDiscount} x {item.price}{item.currency}</span>
                </footer>
            }
        </article>
    );
}

BasketItem.propTypes = {
    item: PropTypes.object.isRequired,
    total:PropTypes.object.isRequired
};

export default BasketItem;