// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumber extends Component {
  state = {randomNum: 0}

  onClicking = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn-container">
            <button type="button" className="btn" onClick={this.onClicking}>
              Generate
            </button>
          </div>
          <p className="heading-2">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
