import {connect} from 'react-redux';
import { getItems } from '../actions/shopping-actions';
import ItemList from './ItemList';

function mapStateToProps(state) {
  return {
    items: state.shopping.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => { dispatch(getItems()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);