import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameOver} = this.props
    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar-container">
        <div className="row1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji-game"
            className="game-image"
          />
          <h1 className="nav-heading">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </nav>
    )
  }
}

export default NavBar
