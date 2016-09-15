import React from 'react';
import actions from '../redux/actions';
import ReactDOM from 'react-dom';

class ChangeRecipie extends React.Component {  
  
  updateThisRecipie (e) {
    const ChangeRecipie = {
      id: this.props.recipie.id,
      title: (ReactDOM.findDOMNode(this.refs.Title).value),
      img:   (ReactDOM.findDOMNode(this.refs.Image).value),
      time: (ReactDOM.findDOMNode(this.refs.Time).value),
      ingredients: (ReactDOM.findDOMNode(this.refs.Ingredients).value),
      steps: (ReactDOM.findDOMNode(this.refs.Steps).value),
      notes:  (ReactDOM.findDOMNode(this.refs.Notes).value)
    };
    e.preventDefault();
    this.props.dispatch(actions.updateThisRecipie(ChangeRecipie));
  }
  handleTitleChange(e){
    // pass value, field, recipie
    this.props.dispatch(actions.handleTitleChange(e.target.value, "title", this.props.recipie));
  }
  handleImgChange(e){
    this.props.dispatch(actions.handleTitleChange(e.target.value, "img", this.props.recipie));
  }
  handleTimeChange(e){
    this.props.dispatch(actions.handleTitleChange(e.target.value, "time", this.props.recipie));
  } 
  handleIngredientsChange(e){
    this.props.dispatch(actions.handleTitleChange(e.target.value, "ingredients", this.props.recipie));
  } 
  handleStepsChange(e){
    this.props.dispatch(actions.handleTitleChange(e.target.value, "steps", this.props.recipie));
  }
  handleNotesChange(e){
    this.props.dispatch(actions.handleTitleChange(e.target.value, "notes", this.props.recipie));
  }
  deleteRecipie(e){
    e.preventDefault();
    this.props.dispatch(actions.deleteRecipie(this.props.recipie));
  }
  render(){
    return (
      <div className="modal fade" id="EditRecipie" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Edit Recipe</h4>
            </div>
            <div className="modal-body">  
            <form>
              <div className="form-group">
                <input 
                ref="Title"
                type="text" className="form-control" placeholder="Recipie Name" 
                value={this.props.recipie.title}
                onChange={this.handleTitleChange.bind(this)}/>
                <input
                 ref="Image"
                 value={this.props.recipie.img}
                 type="text" className="form-control" placeholder="Image Url" 
                 onChange={this.handleImgChange.bind(this)}/>      
                <input 
                ref="Time"
                value={this.props.recipie.time}
                type="text" className="form-control" placeholder="Estimated Time" 
                onChange={this.handleTimeChange.bind(this)}/>
                <textarea 
                ref="Ingredients"
                value={this.props.recipie.ingredients}
                className="form-control" rows="5" placeholder="Ingredients" 
                onChange={this.handleIngredientsChange.bind(this)}/>
                <textarea 
                ref="Steps"
                value={this.props.recipie.steps}
                className="form-control" rows="5" placeholder="Steps" 
                onChange={this.handleStepsChange.bind(this)}/>
                <textarea 
                ref="Notes"
                value={this.props.recipie.notes}
                className="form-control" rows="5" placeholder="Notes" 
                onChange={this.handleNotesChange.bind(this)}/>
              </div>
            </form>
            </div>
            <div className="modal-footer">
            <p>Please refresh after saving an edit.</p>
            <button 
              onClick={this.deleteRecipie.bind(this)}
              type="button" className="btn btn-danger recipie-delete" data-dismiss="modal">Delete</button>
              <button 
              onClick={this.updateThisRecipie.bind(this)}
              type="button" className="btn btn-default" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ChangeRecipie;