import {legacy_createStore as createStore} from 'redux'
import { tokenReducer } from "./tokens/tokensReducer";

// método que vai interceptar entre o action e o reducer harmazendo o processo.
const store = createStore(tokenReducer);

export default store;
