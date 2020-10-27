import "./rating.css";
import React, {Component} from 'react';
import FeatherIcon from 'feather-icons-react';

class Rating extends Component{
    render(){
        if(this.props.rating > 4 && this.props.rating <= 5){
            return(
                <div>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>    
                </div>
            );
        }
        else if (this.props.rating > 3 && this.props.rating <= 4){
            return(
                <div>
                    <FeatherIcon icon="star" className="checked rating-icon"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon" />
                </div>
            );
        }
        else if (this.props.rating > 2 && this.props.rating <= 3){
            return(
                <div>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star"className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                </div>
            );
        }
        else if (this.props.rating > 3 && this.props.rating <= 2){
            return(
                <div>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                </div>
            );
        }
        else if (this.props.rating > 2 && this.props.rating <= 1){
            return(
                <div>
                    <FeatherIcon icon="star" className="checked"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                </div>
            );
        }
        else{
            return(
                <div>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                    <FeatherIcon icon="star" className="rating-icon"/>
                </div>
            );
        }
    }

}

export default Rating;