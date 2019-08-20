import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./helper";


function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      console.log("test", state);
      console.log("heroes test", heroes);
      return heroes;
    case REMOVE_CHARACTER:
      heroes = state.filter(item => item.id !== action.id);
      console.log("test", state);
      console.log("heroes test", heroes);
      return heroes;
    default:
      return state;
  }
}

export default heroes;
