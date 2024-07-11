export const state = {
  todos: ["wake up at 8 am"],
};
export const functionData = (data, action) => {
  switch (action.key) {
    case "Add_Todo":
      return { ...data, todos: [...data.todos, action.newTodo] };
      case 'Delete_Todo':
        return {...data,todos:[...data.todos]}

    default:
      return state;
  }
};
