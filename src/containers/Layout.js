import React from 'react';
import Header from '../components/Header.js';
// import RecipieCard from '../components/RecipieCard.js';
import RecipieGlance from '../components/RecipieGlance';
import NewRecipie from '../components/NewRecipie';
import ChangeRecipie from '../components/ChangeRecipie';
import ViewRecipie from '../components/ViewRecipie';

import { connect } from 'react-redux';
import actions from '../redux/actions';

import localforage from "localforage";


class Layout extends React.Component {

  componentDidMount(){
    localforage.getItem('store').then((value) => {
    this.props.dispatch(actions.updateStateFromCache(value))
  })


  }


  componentDidUpdate(){
    localforage.setItem('store', this.props.recipies).then(() => {}); 
  }
 

  render (){

  let filteredRecipies = this.props.recipies.filter(
    (recipie) => {
      return recipie.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
    }
  );

    return (
      <div>
        <NewRecipie dispatch={this.props.dispatch}/>
        <ChangeRecipie dispatch={this.props.dispatch} recipie={this.props.editThisRecipie}/>
        <ViewRecipie dispatch={this.props.dispatch} recipie={this.props.editThisRecipie}/>

        <Header dispatch={this.props.dispatch}/>
        <h1 className="header-title">recipe!</h1>
        
        {
          filteredRecipies.map((recipie)=>{
            return <RecipieGlance key={recipie.title} recipie={recipie} dispatch={this.props.dispatch}/>;
          })
        }

      </div>

    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Layout);