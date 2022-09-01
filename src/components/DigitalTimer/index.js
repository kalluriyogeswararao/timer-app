import {Component} from 'react'

import './index.css'

const PLAY_BTN = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const PAUSE_BTN = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'

class DigitalTimer extends Component {
  state = {isStart: false}

  onStartTimer = () => {
    this.setState(prevState => ({isStart: !prevState.isStart}))
  }

  render() {
    const {isStart} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-details">
          <div className="timer-container">
            <div className="timer-clock">
              <p className="timer">25:00</p>
              <p className="status">Paused</p>
            </div>
          </div>
          <div className="timer-control-container">
            <div className="icons">
              <div className="icon-container">
                <button
                  type="button"
                  className="play-button"
                  onClick={this.onStartTimer}
                >
                  <img
                    src={isStart ? PAUSE_BTN : PLAY_BTN}
                    alt="play icon"
                    className="play-icon"
                  />
                </button>
                <p className="play-text">{isStart ? 'Pause' : 'Start'}</p>
              </div>
              <div className="icon-container">
                <button type="button" className="play-button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="play icon"
                    className="play-icon"
                  />
                </button>
                <p className="play-text">Reset</p>
              </div>
            </div>
            <div className="limit">
              <p className="set-limit-text">Set Timer Limit</p>
              <div className="btn">
                <button type="button" className="button">
                  -
                </button>
                <p className="time-limit">25</p>
                <button type="button" className="button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
