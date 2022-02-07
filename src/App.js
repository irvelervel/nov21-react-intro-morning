import logo from './logo.svg'
import './App.css'

// App is a React Component! :)
// a React Component can be as simple as a function returning JSX

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello First React Component!</p>
        <button onClick={() => alert('hello!')}>CLICK ME!</button>
      </header>
    </div>
  )
}

export default App
