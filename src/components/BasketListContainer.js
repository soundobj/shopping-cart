import {connect} from 'react-redux';
import BasketList from './BasketList';

function mapStateToProps(state) {
  return {
    items: state.shopping.items,
    basketItems: state.shopping.basketItems
  };
}

export default connect(mapStateToProps, null)(BasketList);