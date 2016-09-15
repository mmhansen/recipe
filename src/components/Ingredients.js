import React from 'react';
import actions from '../redux/actions.js';

export default class Ingredients extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: ''
    };
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.dispatch(actions.addIngredient(this.state.inputText));
}

  render(){
    return (
        <div>
          <div className="input-group">
          <input 
          onChange={this.handleChange.bind(this)}
          type="text" className="form-control" placeholder="Let's Add" />
          <span className="input-group-btn">
            <button 
            onClick={this.handleSubmit.bind(this)}
            className="btn btn-default" type="button">Go!</button>
          </span>
        </div>

        <ul>
          {
            this.props.ingredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.text}</li>
            })
          }


        </ul>

        </div>
         

    );
  }
}
