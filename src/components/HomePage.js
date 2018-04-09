import React from 'react'
import CompletedMatches from './CompletedMatches'
import ScheduledMatches from '../containers/ScheduledMatchesContainer'
import styled from 'styled-components'

const BtnUp = styled.button`
  position: fixed;
  bottom: 20em;
`

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
    const treshold = scrollHeight - 20
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop >= treshold && !this.isContentLoad) {
      this.isContentLoad = true
      this.props.nextPage()
      this.props.takeMatches()
    } else if (scrollTop <= treshold && this.isContentLoad) {
      this.isContentLoad = false
    }
  }

  scrollUp = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const { completedMatches } = this.props

    return (
      <div>
        <ScheduledMatches />
        <CompletedMatches completedMatches={completedMatches} />
        <BtnUp onClick={() => this.scrollUp()}>TOP</BtnUp>
      </div>
    )
  }
}

export default HomePage
