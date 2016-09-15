import React from 'react';
import actions from '../redux/actions';
import ReactDOM from 'react-dom';


export default class NewRecipie extends React.Component {
  constructor(){
    super();
    this.state = {
      recipie: {
      id: null,
      title: "",
      img: "",
      time: {
        total: ""
      },
      ingredients: "",
      steps: "",
      notes: ""
      }
    };
  }

  
  newRecipie (e) {
    
    const newRecipie = {
      id: null,
      title: (ReactDOM.findDOMNode(this.refs.Title).value),
      img:   (ReactDOM.findDOMNode(this.refs.Image).value),
      time: (ReactDOM.findDOMNode(this.refs.Time).value),
      ingredients: (ReactDOM.findDOMNode(this.refs.Ingredients).value),
      steps: (ReactDOM.findDOMNode(this.refs.Steps).value),
      notes:  (ReactDOM.findDOMNode(this.refs.Notes).value)

    };

    e.preventDefault();
    this.props.dispatch(actions.newRecipie(newRecipie));
    
    

  }

  render(){
    return (
      <div className="modal fade" id="NewRecipie" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">New Recipe</h4>
            </div>
            <div className="modal-body">  
            <form>
              <div className="form-group">
                <input 
                ref="Title"
                type="text" className="form-control" placeholder="Recipe Name" />
                <input
                 ref="Image"
                 type="text" className="form-control" placeholder="Image Url. It's okay if you don't have one, just leave it blank." />
                <input 
                ref="Time"
                type="text" className="form-control" placeholder="Estimated Time" />
                <textarea 
                ref="Ingredients"
                className="form-control" rows="5" 
                placeholder="Ingredients. Please write ingredients like '1. corn tortillas - 4' for best effect" />
                <textarea 
                ref="Steps"
                className="form-control" rows="5" 
                placeholder="Steps Please write ingredients like '1. preheat oven to 350' for best effect" />
                <textarea 
                ref="Notes"
                className="form-control" rows="5" placeholder="Notes" />
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button 
              onClick={this.newRecipie.bind(this)}
              type="button" className="btn btn-default" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}