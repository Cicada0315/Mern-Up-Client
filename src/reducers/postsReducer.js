export default function postsReducer(state=[], action){
    switch (action.type) {
        case 'FETCH_POSTS':
          return action.payload;
        case 'CREATE_POST':
          return [...state, action.payload];
        case 'UPDATE_POST':
          return state.map((state) => (state._id === action.payload._id ? action.payload : state));
        case 'DELETE_POST':
          return state.filter((p) => p._id !== action.payload);
        case 'LIKE_POST':
          return state.map((state) => (state._id === action.payload._id ? action.payload : state));
        default:
          return state;
    };
};