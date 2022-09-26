// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  onSubClicked = () => {
    const {buttonText} = this.state
    const buttonTexts = buttonText === 'Subscribe' ? 'Subscribed' : 'Subscribe'
    this.setState({buttonText: buttonTexts})
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>

        <button onClick={this.onSubClicked} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
