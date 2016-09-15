import React from 'react';
import actions from '../redux/actions';

export default class Steps extends React.Component {
  constructor (){
    super();
    this.state = {
      rawSteps: ""
     // display: this.props.convertedSteps
    };
  }

  updateSteps (e){
    this.setState({
      rawSteps: e.target.value
    });
  }
  
  /* send step text to convert it into a list CLICK OUT */
  convertSteps (){
    this.props.dispatch(actions.convertSteps(this.state.rawSteps));
   
    this.setState({
      display: this.props.convertedSteps
    }); 
  }

  /* recieve step list and convert into plain text CLICK IN */
  unConvertSteps (){
    this.props.dispatch(actions.unConvertSteps(this.props.convertedSteps));
    this.setState({
      display: this.props.rawSteps
    });
  }
  

  render(){
    return (
      <div className="step-input">
      <textarea 
      onFocus = {this.unConvertSteps.bind(this)}
      onBlur = {this.convertSteps.bind(this)}
      onChange = {this.updateSteps.bind(this)}
      placeholder='Please number each step for correct formatting. ex. "1. Preheat Oven."' >{this.state.display}</textarea>
      </div>
    );    
  }
}
