const initalData = {
  list: [],
};

const todoReducer = (state = initalData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
     if(data){
        return {
            ...state,
            list: [
              ...state.list,
              {
                id: id,
                data: data,
              },
            ],
          };
     }

    case "DEL_TODO":
      const filterList = state.list.filter((item) => item.id !== action.id);
      return{
          ...state,list:filterList
      }
    case "REMOVE":
     
      return{
          ...state,
          list:[]
      }

      default:
      return state;
  }
};

export default todoReducer;
