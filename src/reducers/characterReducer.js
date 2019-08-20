import characters_json from "../actions/data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import {createCharacter} from "./helper";

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      console.log("characters", characters);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)]
      return characters;
    default:
      return state;
  }
}

export default characters;
