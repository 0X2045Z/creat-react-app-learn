import React, { Component, createContext } from 'react' 
import './index.css'

const UserNameContext = createContext()
const {Provider, Consumer} = UserNameContext

export default class A extends Component {
  state = {userName:'Tom'}
  render() {
    const {userName} = this.state
    return (
      <div className='p'>
        <span>I am A</span>
        <Provider value={userName}>
           <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
    render() {
      return (
        <div className='c'>
        <span>I am B</span>
        <C/>
      </div>
      )
    }
}

// class C extends Component {
//     static contextType = UserNameContext
//     render() {
//       return (
//         <div className='g'>
//         <span>I am C, 我接受到: {this.context}</span>
//       </div>
//       )
//     }
// }

function C(){
    return (
        <div className='g'>
          <span>I am C, 我接受到: 
            <Consumer>
                { value => '${value}' }
            </Consumer>
          </span>
        </div>
    )
}
