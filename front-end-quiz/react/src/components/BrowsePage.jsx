import React from 'react';
import { getBrowseItems } from "../actions/getActions";
import { connect } from 'react-redux';
import PageItem from './subComponents/PageItem';
import "../style/App.css";

class BrowsePage extends React.Component {
    componentWillMount() {
        this.props.getBrowseItems(0, 3);
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        const { items } = this.props.gets;
        if(items == null)
            return null;

        return (
            <div className="browse-items">
                <div className="top-page">
                    <h2 className="text">Browse Page</h2>
                </div>
                { 
                    items.map((item, index) => <PageItem key={index} item={item} />)
                }
            </div>
        );
    }

}

const mapStateToProps = state => ({
    gets: state.gets.items
})


export default connect(mapStateToProps, { getBrowseItems })(BrowsePage);