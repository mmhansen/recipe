import React from 'react';
import Ingredients from './Ingredients.js';
import Steps from './Steps.js';

export default class RecipieCard extends React.Component {
  render (){
    return (
      <div className="container-fluid recipie-box">
      
        <div className="row">
      
      {/* This is the part to replicate for each recipie */}
        <div className="col-sm-12 col-md-6 offset-md-3 recipie-card">


        {/* Shows Photo, Cook Time, Difficulty */}
        <div className="row">
          <div className="col-sm-12">
          this is notes content
          </div>
        </div>
        <hr />

        {/* This will be a list that gains checkmarks when you enter the card */}
        {/* As an example lets make an input to make a list */}
        <div className="row">
          <div className="col-sm-12 col-md-6">

          <Ingredients dispatch={this.props.dispatch} ingredients={this.props.ingredients}/>
          

          </div>
        {/* This will be a list of steps perhaps make it a text area where you number each line, and then it seperates to steps */}
          <div className="col-sm-12 col-md-6">
         
          <Steps 
          dispatch={this.props.dispatch} 
          convertedSteps={this.props.convertedSteps} 
          rawSteps={this.props.rawSteps}/>

          </div>
        </div>
        {/* Additonal notes about cooking, hidden by default */}
        <hr />
        <div className="row">
          <div className="col-sm-12">
          this is notes content
          </div>
        </div>
        </div>

      </div>
      </div>
    );
  }
}
