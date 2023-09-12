// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="header">Welcome</h1>
        <br />
        <p className="greeting">Thank You! Happy learning</p> <br />
        <button className="button" type="button" onClick={this.buttonText}>
          {buttonText}{' '}
        </button>
      </div>
    )
  }
}
export default Welcome
