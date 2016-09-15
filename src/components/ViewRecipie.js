import React from 'react';

class ViewRecipie extends React.Component { 

  render(){

   let steps = (this.props.recipie.stepList ? this.props.recipie.stepList : []);
   let ingredients = (this.props.recipie.ingredientsList ? this.props.recipie.ingredientsList : []);
   
    return (
      <div className="modal fade" id="ViewRecipie" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">{this.props.recipie.title}</h4>
            </div>

            <div className="modal-body contaianer">  
            <div className="row">
            {/*
            <h4> Let's Make a  
            <select className="custom-select amount-select">
              <option value="1">Single</option>
              <option value="2">Double</option>
              <option value="3">Triple</option>
            </select>
            batch.
            </h4>
             */}
              <div className="col-sm-10 offset-sm-1">
              <h4>Ingredients</h4>
              <table className="table">
                <tbody>
                {
                    ingredients.map((ingredient) => {
                      return (
                        <tr key={ingredient}>
                          <td> 
                          <input type="checkbox" value=""/>
                            </td>
                          <td>{ingredient[1]}</td>
                          <td>{ingredient[0]}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              </div>
            </div>
            <div className="row">
            <div className="col-sm-10 offset-sm-1">
            <h4>Steps</h4>
              <table className="table">
                <tbody>
                {
                    steps.map((step, index) => {
                      return (
     
                        <tr key={ index + 1 }>
                          <th scope="row">{ index + 1 }</th>
                          <td>{step}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              </div>
            </div>
            <h4>Notes</h4>

            <div className="row">
            <div className="col-sm-10 offset-sm-1">
            <p className="notes">{this.props.recipie.notes}</p>

            </div>
            </div>

            </div>

            
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRecipie;

