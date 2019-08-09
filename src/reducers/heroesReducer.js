import { ADD_CHARACTER } from "../actions";
import { createCharacter } from "./helper";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      console.log("test", state);
      console.log("heroes test", heroes);
      return heroes;
    default:
      return state;
  }
}

export default heroes;
