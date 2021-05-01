import { SET_ALL_NEWS} from "../actions";

const initialState = {

  allNews:[],
  filteredNews:[],


};

function setAllNews(state, action) {
  return {
    ...state,
    allNews: [...action.payload],
    filteredNews: [...action.payload]
  };
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_NEWS:
      return setAllNews(state, action);
    default:
      return state;
  }
};