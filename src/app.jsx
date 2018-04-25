import React                 from 'react'
import ReactDom              from 'react-dom'
import { createStore }       from 'redux'
import { Provider, connect } from 'react-redux'
import formReducer           from './reducers/form_reducer'
import FormApp               from './containers/form_container'
import send                  from './actions/form_action'

// 初期state
const initialState = {
  value: null,
}

const store = createStore(formReducer, initialState);

// Connect to Redux
function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);
