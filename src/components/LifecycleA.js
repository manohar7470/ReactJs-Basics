import React, { Component } from 'react'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Vishwas'
         }
         console.log("LifecycleA constructor")
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDeriveed from  props')
         return null
        }
componentDidMount(){
    console.log('LifecycleA componentsDidMount')
}
     
    render() {
        console.log(" render LifecyclA")
        return (
            <div>
                LifecycleA render
            </div>
        )
    }
}

export default LifecycleA
