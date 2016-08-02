import ReactDOM from 'react-dom'
import React from 'react'

const Hello = ({text}) => {
  return <h1>
    {text}
  </h1>
}

class Hello2 extends React.Component {
  render() {
    return <h1>
      HiHi {this.props.text}
    </h1>
  }
}

ReactDOM.render(
  <Hello2 text="1234"/>, document.getElementById('app')
)
