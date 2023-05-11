// // 1. Basic Configuartion
// import { createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// }

// // 2. Thunk Configuartion
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk)
//     );
// }

// 3. Thunk Configuartion with Redux DevTools
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}