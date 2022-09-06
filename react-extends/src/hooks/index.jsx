import { useState, useEffect } from 'react'

function Demo(){

    const [count, setCount] = useState(0)

    function add(){
        console.log("@@@")
        setCount(count+1)
    }

    // 全部监测，只要state发生改变就更新一次dom
    useEffect(()=>{
        console.log("全部监测，只要state发生改变就更新一次dom")
    })

    // 传递空数组全部不监测
    useEffect(()=>{
        console.log("全部监测，只要state发生改变就更新一次dom")
        let timer = setInterval(() => {
            setCount(count+1)
        }, 1000);
        return ()=>{
            // 返回的方法相当于componentDidMount
            clearInterval(timer)
        }
    },[])

    // 数组传值，监测count
    useEffect(()=>{
        console.log("数组传值，监测count")
    },[count])
    

    return (
        <div>
          <h2>当前求和为：{count}</h2>
          <button onClick={add}>点我+1</button>
        </div>
    )
}

export default Demo

// import React, { Component } from 'react'
// export default class Demo extends Component {

//   state = {count:0}

//   add = ()=>{
//     const {count} =  this.state
//     this.setState({count:count+1})
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//       </div>
//     )
//   }
// }
