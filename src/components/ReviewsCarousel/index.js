// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewItemId: 0}

  getReview = reviewsList => {
    const {activeReviewItemId} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewItemId
    ]

    return (
      <div className="profile-container">
        <h1 className="reviews-heading">Reviews</h1>
        <img className="profile-image" src={imgUrl} alt={username} />
        <p className="profile-name">{username}</p>
        <p className="profile-company-name">{companyName}</p>
        <p className="profile-description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewItemId} = this.state
    if (activeReviewItemId > 0) {
      this.setState(prevState => ({
        activeReviewItemId: prevState.activeReviewItemId - 1,
      }))
      // console.log(`Left Button: ${activeReviewItemId}`)
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewItemId} = this.state
    if (activeReviewItemId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewItemId: prevState.activeReviewItemId + 1,
      }))
      // console.log(`Right Button: ${activeReviewItemId}`)
    }
  }

  render() {
    const {reviewsList} = this.props
    // console.log(reviewsList)

    return (
      <div className="app-container">
        <div className="reviews-container">
          <div className="reviews-inner-container">
            <button
              data-testid="leftArrow"
              className="custom-button"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.getReview(reviewsList)}
            <button
              data-testid="rightArrow"
              className="custom-button"
              type="button"
              onClick={this.onClickRightArrow}
            >
              <img
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
