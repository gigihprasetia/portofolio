const initialState = {
  preview: 1,
};

const Navigate = (state = initialState, actions) => {
  if (actions.type == "preview") {
    return (state.preview = actions.data);
  } else {
    return state;
  }
};

export default Navigate;
