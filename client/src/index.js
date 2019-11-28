import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/store';
import { Provider } from "react-redux";
import { checkLoggedIn } from "./redux/actions";

// const renderApp = preloadedState => {
//     const store = configureStore(preloadedState);

//     store.dispatch(checkLoggedIn);

//     ReactDOM.render(
//       <Provider store={store}>      
//           <App />
//       </Provider>,
//       document.getElementById("root")
//     );
//   };
//   (async () => renderApp(await checkLoggedIn()))();

const store = configureStore();
// store.dispatch(checkLoggedIn);
ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

window.getState = store.getState;



