import React, {PropTypes} from 'react';
import Item from './ItemContainer';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.props.getItems();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({"items": nextProps.items});
    }

    render() {
        return (
            <ul>
                {this.state.items.map((item, index) => <li key={index}><Item item={item} /></li>)}
            </ul>
        );
    }
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;
