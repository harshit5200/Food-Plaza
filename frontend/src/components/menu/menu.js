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
          var fd = new FormData();
          if (this.state.searchItem){
          fd.append("searchItem", this.state.searchItem);
          fetch("http://localhost:5000/api/searchfood",{
            method: 'POST',
            body:fd,
        }).then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
      }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/retrievefood')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
          }    

    filterSearch(){
      if (this.state.filterItem === 'A-Z'){
        fetch('http://localhost:5000/api/filtername')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
      }
      if (this.state.filterItem === 'Price'){
        fetch('http://localhost:5000/api/filterprice')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
      }
      if (this.state.filterItem === 'Rating'){
        fetch('http://localhost:5000/api/filterrating')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
      }
    }

    cancelSearch(){
      window.location.reload();
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
            <div className="container-fluid">
            <div className="row">
            <div className="row searchBar">
              <input className="searchInput" name="searchItem" placeholder="Search For Food!" onChange={this.onChange} ></input>
              <button className="searchBtn" onClick={this.searchFood.bind(this)}><FeatherIcon icon="search" className="searchIcon"></FeatherIcon></button>
              <button className="searchBtn" onClick={this.cancelSearch.bind(this)}><FeatherIcon icon="x-circle" className="searchIcon"></FeatherIcon></button>
            </div>
            <div className="filter-bar">
            <select className="filterItem" onChange={this.onChange} onClick={this.filterSearch.bind(this)} name="filterItem">
              <option>Filter</option>
              <option value="A-Z">A-Z</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
            </select>
            </div>
            </div>
            <div className="row">
            {
                this.state.Foods.map(Food => (
                    <FoodCard className="menu-food-item"  key = {Food._id} id = {Food._id} foodName={Food.foodName} foodType={Food.foodType} foodDescription={Food.foodDescription} foodRating={Food.foodRating} foodPrice={Food.foodPrice} foodImage={Food.foodImage}></FoodCard>
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