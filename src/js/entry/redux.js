// import React, { Component, PropTypes } from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'

// const store = createStore(reducer);

// class Counter extends Component{
//   render(){
//     const {value, onIncrement, onDecrement} = this.props;
//     return (
//       <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//       </div>
//     )
//   }
// }

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT': return state + 1;
//     case 'DECREMENT': return state - 1;
//     default: return state;
//   }
// };

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//       onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('view')
//   );
// };

// render();
// store.subscribe(render);

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <Cou />
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

class Cou extends Component{
  render(){
    const {value} = this.props;
    console.log(this.props);
    return(
      <div>{value}</div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('view')
)
