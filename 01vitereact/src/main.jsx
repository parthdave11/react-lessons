import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <h1>
      Parth Dave New Function...
    </h1>
  )
}


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MyApp/>
    // anotherElement  // another element we created
    // MyApp() // this also works but we dont do that because of the optimization issue and it is not the best practise.
  /* </React.StrictMode>, */
  // reactElement

  <App/>
)
