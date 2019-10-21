import update from 'immutability-helper';

let CUSTOMER_ID_COUNTER = 4;
let FEEDBACK_ID_COUNTER = 10;

const initialState = [
  {
    id: 1,
    name: 'Ludwig van Beethoven',
    feedback: [
      { id: 1, message: 'LvB 1' },
      { id: 2, message: 'LvB 2' },
      { id: 3, message: 'LvB 3' },
    ],
  },
  {
    id: 2,
    name: 'Wolfgang Amadeus Mozart',
    feedback: [
      { id: 4, message: 'WAM 1' },
      { id: 5, message: 'WAM 2' },
      { id: 6, message: 'WAM 3' },
    ],
  },
  {
    id: 3,
    name: 'Johannes Brahms',
    feedback: [
      { id: 7, message: 'JB 1' },
      { id: 8, message: 'JB 2' },
      { id: 9, message: 'JB 3' },
    ],
  },
];

export default function customersReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return update(state, {
        $push: [{
          id: CUSTOMER_ID_COUNTER++,
          name: action.name,
          feedback: [],
        }]
      });
    case 'ADD_FEEDBACK':
      const customerIndex = state.findIndex(x => x.id === action.customerId);
      return update(state, {
        [customerIndex]: {
          feedback: {
            $push: [{ id: FEEDBACK_ID_COUNTER++, message: action.message }],
          }
        }
      });
    default:
      return state;
  }
}
