//-------------------------------------------without persist----------------------------------------//

// import { createStore } from "redux";
// import rootReducer from "./reducer/comReducer";
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;


//--------------------------------------with Persist(redux data store in locastorage)-------------------//

import { createStore } from "redux";
import { persistReducer ,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer/comReducer";

const persistConfig = {
    key:"persist-store",
    storage 
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persists=persistStore(store)
export default store;