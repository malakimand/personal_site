
// Initial state
const initialState = {
  messages: [],
};
const ADD_MESSAGE = 'ADD_MESSAGE';
const EDIT_MESSAGE = 'EDIT_MESSAGE';


// State
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case EDIT_MESSAGE:
    
      state.messages.map((message) => {
        
        if(message.created_on === action.message.created_on)
           message.message =  action.message.message;
        return message

      });
      return {...state};
      
    default:
      return state;
  }
};