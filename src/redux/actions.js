const SEARCH = "SEARCH";
const NEW_RECIPIE = "NEW_RECIPIE";
const EDIT_THIS_RECIPIE = "EDIT_THIS_RECIPIE";
const UPDATE_THIS_RECIPIE = "UPDATE_THIS_RECIPIE";
const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
const DELETE_RECIPIE = "DELETE_RECIPIE";
const MAKE_STRING_TO_LIST = "MAKE_STRING_TO_LIST";
const UPDATE_FROM_CACHE = "UPDATE_FROM_CACHE";
const SPLIT_INGREDIENT_AMOUNTS = "SPLIT_INGREDIENT_AMOUNTS";

let actions = {
  search: function(text) {
    return {
      type: SEARCH,
      text: text
    };
  },
  newRecipie: function(obj){
    return {
      type: NEW_RECIPIE,
      recipie: obj
    };
  },
  editThisRecipie: function(obj){
    return {
      type: EDIT_THIS_RECIPIE,
      recipie: obj
    };
  },
  updateThisRecipie: function(obj){
    return {
      type: UPDATE_THIS_RECIPIE,
      recipie: obj
    };
  },
  handleTitleChange: function(text, field, recipie){
    return {
      type: HANDLE_INPUT_CHANGE,
      inputText: text,
      inputName: field,
      recipie: recipie
    };
  },
  deleteRecipie: function(recipie){
    return {
      type: DELETE_RECIPIE,
      recipie: recipie
    };
  },
  makeStringtoList: function(str, recipie, fieldname){
    return {
      type: MAKE_STRING_TO_LIST,
      str: str,
      field: fieldname,
      recipie: recipie
    };
  },
  updateStateFromCache: function(state){
    return {
      type: UPDATE_FROM_CACHE,
      state: state
    };
  },
  splitIngredientAmounts: function(ingredients, recipie){
    return {
      type: SPLIT_INGREDIENT_AMOUNTS,
      list: ingredients,
      recipie: recipie
    };
  }
};



export default actions;
