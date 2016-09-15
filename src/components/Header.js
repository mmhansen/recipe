import React from 'react';
import HeaderSearch from './HeaderSearch.js';

export default class Header extends React.Component {
  render (){
    return (
      <div className="container-fluid ontop">
      <div className="row">
        <div className="col-sm-12 header-card">
        <div className="row">
        
          <div className="col-sm-12 col-md-8 offset-md-2 header-search">
            <HeaderSearch dispatch={this.props.dispatch}/>
          </div>

        </div>    
        </div>
      </div>
      </div>
    );
  }
}