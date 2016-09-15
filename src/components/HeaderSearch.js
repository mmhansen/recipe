import React from 'react';
import actions from '../redux/actions';

export default class HeaderSearch extends React.Component {

  search (e){
   this.props.dispatch(actions.search(e.target.value));
  }

  

  render (){
    return (
       <div className="input-group">

          <input 
          onChange={this.search.bind(this)}
          type="text" className="form-control" placeholder="Search for..." />

          <span className="input-group-btn">
            <button 
            data-toggle="modal" data-target="#NewRecipie"
            className="btn btn-default" type="button">
              <i className="material-icons">add</i>
            </button>
          </span>



        </div>

    );
  }
}