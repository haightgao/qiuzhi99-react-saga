import { connect } from 'react-redux'
import { increment } from './actions/counter'
import logo from './logo.svg'
import './App.css'

function App(props) {
  console.log(props)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{props.counter}</p>
        <p>
          <button
            onClick={() => {
              props.increment()
            }}
          >
            +
          </button>
        </p>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}
export default connect(mapStateToProps, { increment })(App)
