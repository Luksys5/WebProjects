import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getViewItem } from "../actions/getActions";
import { FaChevronLeft, FaHeart } from "react-icons/fa";
import { applyMiddleware } from 'C:/Users/Crank/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

export const amountTypes = ["GBP", "USD", "EUR"];
class ViewItem extends React.Component {
    
    constructor() {
        super();
        this.state = { active: false, index: 1 };
    }

    componentWillMount() {
        if(this.props.match == null ||
            this.props.match.params == null ||
            this.props.match.params.itemId == null) {
            throw new Error("View Item endpoint must contain id parameter")
        } else {
            this.props.getViewItem(this.props.match.params.itemId);
        }
    }

    _clickHeart = () => {
        const { active } = this.state;
        this.setState({ active: !active });
    }

    _clickAmount = () => {
        const { index } = this.state;
        this.setState({ index: index === 2 ? 0 : index + 1 })
    }

    render() {
        const { item } = this.props.gets;
        const { active, index } = this.state; 

        if(item == null || item.title == null)
            return null;

        let price = "Price's arrangeable";
        if(item.price != null && !!item.price.amounts[amountTypes[index]]) {
            price = item.price.amounts[amountTypes[index]];
        }

        return (
            <div className='view-item'>
                <div className='top-page'>
                    <button>
                        <Link className='browse-link' to='/browseItems'>
                            <span className='text'>Browse Items</span>
                        </Link>
                    </button>
                    <div className='represent-house'>
                      { item.seller.company }  
                    </div>
                </div>

                <div className='left-panel'>
                    <div className='price-container' onClick={ this._clickAmount }>
                        { price }
                    </div>
                    <div className='like-container'>
                        <FaHeart className='item-like' 
                            fillOpacity={ active ? '1' : '0.5' }
                            onClick={ this._clickHeart }
                        />
                    </div>
                    <div className='panel-top'>
                    
                    </div>
                    <img src={ item.image } alt="smiley.jpg" />
                    <div className='panel-bottom'>
                        <button>Purchase</button>
                        <button>Make Offer</button>
                    </div>
                </div>
                <div className='right-panel'>
                    <h3>{ item.title }</h3>
                    <div className='item-basicProps'>
                        <p>Diameter:</p>
                        <p>Height:</p>
                        <p>Creators:</p>
                    </div>
                    <div className='item-basicValues'>
                        <p className='prop-values'>{ item.measurements.diameter }</p>
                        <p className='prop-values'>{ item.measurements.height }</p>
                        <p className='prop-values'>{ item.seller.company }</p>
                    </div>
                    <div className='item-description'>
                        <p>Item Description</p>
                        <p className='prop-values'>{ item.description }</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gets: state.gets
});

export default connect(mapStateToProps, { getViewItem })(ViewItem);