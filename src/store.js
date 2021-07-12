import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from "redux-logger";
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducers/index'; // the value from combineReducers



import storage from 'redux-persist/lib/storage'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const middleware = applyMiddleware(ReduxThunk, logger);
const middlewares = [logger];
const persistConfig = {
  key: 'root',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//export const persistor = persistStore(store);
export const persistor = persistStore(store)
// Send access token in every request
axios.interceptors.request.use(async function (config) {
  // Set processing
//alert("called");


  // Explicit token
  // const guestTokenUrl = `${API_URL}/user/guest/fetch-access-token`;
  // if(typeof config.headers.Authorization === 'undefined' && config.url != guestTokenUrl){
  //   let guestToken = getSessionItem('guestToken');

  //   // Fetch guest token
  //   // if(!guestToken){
  //   //   const response = await axios({method: 'GET', url: guestTokenUrl});
  //   //   guestToken = response.data.body.token;
  //   // }

  //   // if(guestToken){
  //   //   config.headers = { ...config.headers, Authorization: `Bearer ${guestToken}` };
  //   //   setSessionItem('guestToken', guestToken);
  //   // }
  // }

	return config;
}, function (error) {
  // Set processing
  if(typeof window.axiosThis !== 'undefined' && window.axiosThis){
    window.axiosThis.setState({
      processing: false
    });
  }
	return Promise.reject(error);
});


// Add a response interceptor to check user session
axios.interceptors.response.use(function (response) {
  // Set processing
  if(typeof window.axiosThis !== 'undefined' && window.axiosThis){
    window.axiosThis.setState({
      processing: false
    });
  }
  return response;
}, function (error) {
  // Set processing
  if(typeof window.axiosThis !== 'undefined' && window.axiosThis){
    window.axiosThis.setState({
      processing: false
    });
  }
	// If session is unauthorised, then logout the user.
  if(
  	typeof error.response !== 'undefined' 
  	&& typeof error.response.status !== 'undefined' 
  	&& (error.response.status === 401 || error.response.status === 403)){
  	// Redirect to login page
  	//if(typeof error.response.config.verifyAuth === 'undefined' || error.response.config.verifyAuth === true){
  	//	ToastsStore.error('Your are logged out.');
     // clearSession(`${ROOT}${ROUTES.HOME.path}`);

      return Promise.reject(error);
  	//}
  }else{
    // if(
    //   typeof error.response !== 'undefined' 
    //   && typeof error.response.status !== 'undefined' 
    //   && error.response.status === 404){
    //   // Redirect to home page
    //   window.location = '/';
    // }
  }

  if(typeof error.response !== 'undefined'){
    if(typeof error.response.config.hideError === 'undefined' || error.response.config.hideError != error.response.status){
        const msg = typeof error.response.data.message !== 'undefined' ? error.response.data.message : error.response.data;
        if(typeof msg == 'string'){
         // ToastsStore.error(msg);
        }
    }
  }
  // Do something with response error
  return Promise.reject(error);
});