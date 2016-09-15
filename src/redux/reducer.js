function getRecipieId(state) {
  return state.recipies.reduce((maxId, recipie) => {
    return Math.max(recipie.id, maxId);
  }, 2) +1;
}

function recipiesExceptEdited(state, action) {
  return state.recipies.filter((recipie) => {
      if (recipie.title != action.recipie.title){
        return true;
      } else {
        return false;
      }
  });
}



function checkForImage(state, action) {
  let img = action.recipie.img;
    if (action.recipie.img == "") {
      img = "https://abcsilly.files.wordpress.com/2013/03/bear-cute-eat-food-funny-rabbit-favim-com-61060.jpg";
    }
  return img;  
}
// function recieves recipie, key to change, and value of key to change, returns new recipie obj 
function changeInputTest(recipie, key, value){
 
    recipie[key] = value;
 

  return recipie;
}

function splitString(recipie, str, key){
  recipie[key] = str.split(/[0-9]+\./).slice(1);
  
  return recipie;
}

function splitIngredients(ingredientsList, recipie){

recipie["ingredientsList"] = ingredientsList.map((ingredient)=>{
  return ingredient.split(/-/);
});

return recipie;

}
// need to write check if empty function that will make sure a recipie doesnt break anything

export default function reducer (state, action) {
  switch (action.type) {
   
  case "SEARCH":
    return Object.assign({}, state, {
      search: action.text
    }); 

  case "NEW_RECIPIE":
    return Object.assign({}, state, {
        recipies: [
          {
          id: getRecipieId(state),
          title: action.recipie.title,
          img: checkForImage(state, action),
          time:  action.recipie.time,
          ingredients: action.recipie.ingredients,
          steps: action.recipie.steps,
          notes: action.recipie.notes
        }, ...state.recipies]
      });
    case "EDIT_THIS_RECIPIE":
      return Object.assign({}, state, 
      {
        editThisRecipie: action.recipie 
      });
    case "UPDATE_THIS_RECIPIE":
    return Object.assign({}, state, 
    {
     recipies: [
       action.recipie, ...recipiesExceptEdited(state,action)
     ] 
    });
    case "HANDLE_INPUT_CHANGE":
    // inputname, text, recipie
    return Object.assign({}, state, 
    {
      recipies: [
        changeInputTest(action.recipie, action.inputName, action.inputText), ...recipiesExceptEdited(state,action)
      ]
    });     
    case "DELETE_RECIPIE":
    return Object.assign({}, state, 
    {
      recipies: [
        ...recipiesExceptEdited(state,action)
      ]
    }
    );
    case "MAKE_STRING_TO_LIST":
    return Object.assign({}, state, 
    {
      recipies: [
       splitString(action.recipie, action.str, action.field), ...recipiesExceptEdited(state,action)
      ]
    });
    case "SPLIT_INGREDIENT_AMOUNTS":
    return Object.assign({}, state, 
    {
      recipies: [
        splitIngredients(action.list, action.recipie), ...recipiesExceptEdited(state,action)
      ]
    });


    case "UPDATE_FROM_CACHE":
    return Object.assign({}, state, {
      recipies: [
        ...action.state
      ]
    });

    default: 
      return state;
  }
}