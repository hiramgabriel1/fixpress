export const reducerUser = (state, action) => {
  switch (action.type) {
    case 'SET_SUCCESS':
      return {
        ...state,
        isAccess: true
      }
  }
} 