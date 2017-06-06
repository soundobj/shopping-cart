import {connect} from 'react-redux';
import { addBasketItem } from "../actions/shopping-actions"
import Item from './Item';

function mapDispatchToProps(dispatch) {
  return {
    addBasketItem: (item) => { dispatch(addBasketItem(item)); },
  }
}

export default connect(null, mapDispatchToProps)(Item);