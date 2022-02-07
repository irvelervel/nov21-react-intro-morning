import logo from './logo.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
// .js/.jsx is not needed

// App is a React Component! :)
// a React Component can be as simple as a function returning JSX

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <FirstComponent title='FIRSTCOMPONENT 1' titleColor='red' />
      <img src={logo} className='App-logo' alt='logo' />
      <p>Hello First React Component!</p>
      {console.log('hello')}
      <button onClick={() => alert('hello!')}>CLICK ME!</button>
      <FirstComponent title='FIRSTCOMPONENT 2' titleColor='blue' />
    </header>
  </div>
)

export default App

// const sum1 = (n1, n2) => n1 + n2
// const sum2 = (n1, n2) => {
//  return n1 + n2
// }

// the props make your component DYNAMIC
// for customizing your components and make them truly reusable!
// in the afternoon we're going to have our first example of the OTHER core reactjs concept:
// the state!
