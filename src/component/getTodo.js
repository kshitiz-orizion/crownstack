import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Data from '../assets/csvData';
class GetTodo extends Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.setState({
			currentPage:'mainPage'
		})
	}
      category=location=>{
            this.setState({
                  categories:location.categories,
                  currentPage:'category'
            })
      }
      subcategory=category=>{
            this.setState({
                  currentPage:'sub-category',
                  categoryName:category.name,
                  subcategories:category.subcategories
            })
      }
  render() {
    return (
      <div>	
      	<div className="container-fluid headerContainer">
      		<div className="heading">
      			Rental Management System
      		</div>
      		<div class="dropdown">
			  <button style={{'backgroundColor':"black",'color':'white','border':'none','marginTop':'10px'}}class=" btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
			   Location <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" style={{'position':'absolute',"left":'850px'}}>
			  {Data.data.locations.map((location,i)=>(
			  		<li class="dropdown"><a >{location.name}</a>
			  			<ul class="dropdown-menu">
			  				{location.branches.map((branch,i)=>(
			  					<li onClick={()=>this.category(branch)}><a>{branch.name}</a></li>	
			  				))}
			       		</ul>
			  		</li>
			  	))}
			  </ul>
			</div>		
      	</div>
      	{this.state.currentPage==='mainPage' && <div style={{'width':'100%','height':'670px'}}>	
      		<div style={{"position":"absolute",top:"300px",marginLeft:'40vw'}}>
      			<div>
      			 Welcome To
      			</div>
      			<div>
      				Rental Management System
      			</div>
      			<div>
      				Please Select Location
      			</div>
      		</div>
      	</div>}
      	{this.state.currentPage==='category' && 
      	<div style={{'width':'100%','height':'670px','paddingLeft':'100px',paddingRight:'100px',paddingTop:'50px'}}>
      		<div style={{'clear':'both',float:'left'}}>
      			<span onClick={()=>{this.setState({currentPage:'mainPage'})}}>Equipment Catalog</span>
      		</div>
      		<div  className="categoryImageContainer">
      			{this.state.categories.map((category,i)=>(
                              <div>
                                    <img style={{width:'100%',height:'92%'}}src={"http://localhost:3000/category/" + category.image}/>
            					<div style={{backgroundColor:'blue',color:'white'}}>
                                                <div onClick={()=>this.subcategory(category)} style={{display:'inline-block'}}>
                  						{category.name}
                  					</div>
                  					<div onClick={()=>this.subcategory(category)}style={{'float':'right'}}>
                  						<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  					</div>
                                          </div>
      			      </div>
                        ))}
      		</div>
      	</div>
      }
      {this.state.currentPage==='sub-category' && 
      	<div style={{'width':'100%','height':'670px','paddingLeft':'100px',paddingRight:'100px',paddingTop:'50px'}}>
      		<div style={{'clear':'both',float:'left'}}>
      			<span onClick={()=>{this.setState({currentPage:'mainPage'})}}>Equipment Catalog</span> / <span onClick={()=>{this.setState({currentPage:'category'})}}>{this.state.categoryName}</span>
      		</div>
      		<div  className="categoryImageContainer">
      			{this.state.subcategories.map((subcategory,i)=>(
                              <div>
                                    <img style={{width:'100%',height:'100%'}}src={"http://localhost:3000/category/subcategory/" + subcategory.image}/>
                                          <div style={{backgroundColor:'blue',color:'white'}}>
                                                <div style={{display:'inline-block'}}>
                                                      {subcategory.name}
                                                </div>
                                                <div style={{'float':'right'}}>
                                                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                </div>
                                          </div>
                              </div>
                        ))}
      		</div>
      	</div>
      }
      	<div className="container-fluid headerContainer footer">
      	</div>
      </div>
    );
  }
}

export default GetTodo;