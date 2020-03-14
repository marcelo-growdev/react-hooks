export default function person(state = [], action) {
  switch (action.type) {
    case '@person/ADD':
      console.log('Reducer ADD');
      console.log(state);
      return [...state, action.person];

    case '@person/SHOW_ALERT':
      alert(state.length);
      return state;

    case '@person/REMOVE':
      return state.filter(item => item !== action.person);

    default:
      console.log('Reducer Default');
      console.log(state);
      return state;
  }
}
