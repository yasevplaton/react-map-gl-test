import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const state = {
//   filters: {
//     layerdId: [
//       {
//         id: Number,
//         expressionType: String,
//         fieldName: String,
//         fieldValue: String | number,
//         expression: [],
//       },
//     ],
//   },
// };

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (r) => r
  )
);
