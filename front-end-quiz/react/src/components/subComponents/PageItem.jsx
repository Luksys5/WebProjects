import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../style/App.css";

export const amountTypes = ["GBP", "USD", "EUR"];

export default class PageItem extends React.Component {
    constructor() {
        super();
        this.state = { active: false, index: 1 };
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
        const { item }  = this.props;
        const { active, index } = this.state;

        const destination = "/viewItem/" + item.id; 
        return (
            <div className="item">
                <Link to={destination}>
                    <p className="top-bar">
                        <span> { item.title } </span>
                    </p>
                    <img src={ item.image } alt="smiley.jpg" />
                </Link>
                <div className='price-container' onClick={ this._clickAmount }>
                    { item != null && item.price != null && item.price.amounts[amountTypes[index]] }
                </div>
                <div className='like-container'>
                    <FaHeart className='item-like' 
                        fillOpacity={ active ? '1' : '0.5' }
                        onClick={ this._clickHeart }
                    />
                </div>
            </div>
        )        
    }
}