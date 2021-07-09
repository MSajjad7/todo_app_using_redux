export const addTodo = (data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const delTodo = (id)=>{
    return{
        type:"DEL_TODO",
        id:id
    }
}
export const removeAll = ()=>{
    return{
        type:"REMOVE"
    }
}
export const editTodo = ()=>{
    return{
        type:"EDIT"
    }
}