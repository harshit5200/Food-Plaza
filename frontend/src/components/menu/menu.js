import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation';
import './menu.css';
import menu from './f-menu.png';
import FoodCard from '../foodcard/foodcard';
import Footer from '../footer/footer';
import FeatherIcon from 'feather-icons-react';


class FoodMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
          Foods : [],
            foodName:'',
            foodType:'',
            foodDescription:'',
            foodRating:'',
            foodPrice:'',
            foodImage:'',
            message: null,
            variant: "success", 
        }
      }

      onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

      searchFood(){
          console.log(this.state.searchItem)
      }

    componentDidMount(){
        fetch('http://localhost:5000/api/retrievefood')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
          }    
    

    render(){
        return(
            <div className="food-menu-page">
            <AppNavbar></AppNavbar>
            <div className="menu-title container-fluid">
            <div className="row">
            <div className="col-lg-8">
                <h2 className="menu-title-head">Enjoy The Meal!</h2>
                <h5 className="menu-title-sub-head">Explore Top Deals and Offers!</h5>
            </div>
            <div className="col-lg-4">
                <img className="title-image" src={menu} alt={menu}/>
            </div>
            </div>
            </div>
            <div className="container">
            <div className="row searchBar">
              <input className="searchInput" name="searchItem" placeholder="Search For Food!" onChange={this.onChange} ></input>
              <button className="searchBtn" onClick={this.searchFood.bind(this)}><FeatherIcon icon="search" className="searchIcon"></FeatherIcon></button>
            </div>
            <div className="row">
            {
                this.state.Foods.map(Food => (
                    <FoodCard key = {Food._id} id = {Food._id} foodName={Food.foodName} foodType={Food.foodType} foodDescription={Food.foodDescription} foodRating={Food.foodRating} foodPrice={Food.foodPrice} foodImage={Food.foodImage}></FoodCard>
                ))
              }
            </div>
            </div>
            <Footer></Footer>
            </div>
        );
    }
}

export default FoodMenu;