import React from 'react'
import CompletedMatches from './CompletedMatches'

class HomePage extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
    if (!this.props.completedMatches.length) {
      this.props.takeMatches()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const treshold = scrollHeight - 100
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop >= treshold && !this.isContentLoading) {
      this.isContentLoading = true
      this.props.nextPage()
      this.props.takeMatches()
    } else if (scrollTop <= treshold && this.isContentLoading) {
      this.isContentLoading = false
    }
  }

  render() {
    const { completedMatches } = this.props

    return (
      <div>
        <CompletedMatches completedMatches={completedMatches} />
      </div>
    )
  }
}

export default HomePage
