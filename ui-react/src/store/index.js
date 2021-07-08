

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {

  if (action.type==="CHANGE_DATA"){
    return{
      ...state,
      users:action.newdata
    }
  }
  return state;
}

export default reducer;
