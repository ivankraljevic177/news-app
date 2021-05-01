import { SET_ALL_NEWS,FILTER_NEWS} from "../actions";
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
function filterNews(state, action) {
  return Object.assign({}, state, {
    filteredNews: state.allNews.filter(
      allNews =>
        allNews.title.toLowerCase().search(action.payload.toLowerCase()) !== -1
    )
  });
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_NEWS:
      return setAllNews(state, action);
    case FILTER_NEWS:
      return filterNews(state, action);
    default:
      return state;
  }
};