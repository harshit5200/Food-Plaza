import "./rating.css";
import React, {Component} from 'react';
import FeatherIcon from 'feather-icons-react';

class Rating extends Component{
    render(){
        if(this.props.rating > 4 && this.props.rating <= 5){
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>  
                    <p className="food-rating-value">{this.props.rating}</p>  
                </div>
            );
        }
        else if (this.props.rating > 3 && this.props.rating <= 4){
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="checked rating-icon"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon" />
                    <p className="food-rating-value">{this.props.rating}</p>
                </div>
            );
        }
        else if (this.props.rating > 2 && this.props.rating <= 3){
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star"className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <p className="food-rating-value">{this.props.rating}</p>
                </div>
            );
        }
        else if (this.props.rating > 3 && this.props.rating <= 2){
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <p className="food-rating-value">{this.props.rating}</p>
                </div>
            );
        }
        else if (this.props.rating > 2 && this.props.rating <= 1){
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <p className="food-rating-value">{this.props.rating}</p>
                </div>
            );
        }
        else{
            return(
                <div className="food-rating">
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <p className="food-rating-value">{this.props.rating}</p>
                </div>
            );
        }
    }

}

export default Rating;