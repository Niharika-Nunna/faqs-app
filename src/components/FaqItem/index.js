import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  toggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderButton = () => {
    const {isActive} = this.state
    const altText = isActive ? 'minus' : 'plus'
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <button className="button" type="button" onClick={this.toggleButton}>
        <img src={imgUrl} alt={altText} className="button-image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
