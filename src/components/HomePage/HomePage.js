import React from 'react'
import CompletedMatches from '../CompletedMatches'
import ScheduledMatches from '../../containers/ScheduledMatchesContainer'
import styled from 'styled-components'
import arrow from './arrow.png'

const BtnUp = styled.button`
  position: fixed;
  bottom: 20em;
  border: none;
  background: none;
  margin-left: 5%;
`
const BtnUpImg = styled.img`
  height: 8em;
  width: 8em;
`

class HomePage extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.scrollContent)

    if (!this.props.completedMatches.length) {
      this.props.takeMatches()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollContent)
  }

  scrollContent = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const treshold = scrollHeight - 20
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop >= treshold && !this.isContentLoad) {
      this.isContentLoad = true
      this.loadContent()
    } else if (scrollTop <= treshold && this.isContentLoad) {
      this.isContentLoad = false
    }
  }

  loadContent() {
    this.props.takeMatches()
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
        <BtnUp onClick={() => this.scrollUp()}>
          <BtnUpImg src={arrow} alt={'arrow'} />
        </BtnUp>
      </div>
    )
  }
}

export default HomePage
