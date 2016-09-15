import React from 'react';
import actions from '../redux/actions';

export default class RecipieGlance extends React.Component {
  handleEdit (e){
    
    e.preventDefault();
    this.props.dispatch(actions.editThisRecipie(this.props.recipie));
  }
  handleLetsCook (e){
    // string, recipie, fieldname
    e.preventDefault();
    this.props.dispatch(actions.editThisRecipie(this.props.recipie));
  }
  componentWillMount(){

    this.props.dispatch(actions.makeStringtoList(this.props.recipie.steps, this.props.recipie, "stepList"));
    this.props.dispatch(actions.makeStringtoList(this.props.recipie.ingredients, this.props.recipie, "ingredientsList"));
    this.props.dispatch(actions.splitIngredientAmounts(this.props.recipie.ingredientsList, this.props.recipie));
  }

  render (){
    return(
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 offset-md-3 recipie-glance">

        <div className="row">
          {/* image */}
          <div className="col-sm-6 img-half">
          <img 
          src={this.props.recipie.img} />
          </div>
          {/* quick info */}
          <div className="col-sm-6">
            <h3>{this.props.recipie.title}</h3>
            <p>Takes about {this.props.recipie.time}</p>
            <button
            onClick={this.handleLetsCook.bind(this)}
            data-toggle="modal" data-target="#ViewRecipie"
            className="btn btn-info cook-mode"> Let's Cook!</button>
            <button 
            onClick={this.handleEdit.bind(this)}
            data-toggle="modal" data-target="#EditRecipie"
            className="btn btn-secondary edit-mode"> Edit </button>
          </div>
        </div>
        
        </div>
      </div>
      </div>
    );
  }
}

