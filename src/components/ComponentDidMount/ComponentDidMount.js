import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.newMessage !== state.message){
      return {
        message : props.newMessage
      }
    } else {
      return null;
    }
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({message: "I am too good"})
    },10000);
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    )
  }
}
