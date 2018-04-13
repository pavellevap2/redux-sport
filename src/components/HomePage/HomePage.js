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
  margin-left: 5em;
`
const BtnUpImg = styled.img`
  height: 8em;
  width: 8em;
`

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnTheTop: false,
    }
  }

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
    const threshold = scrollHeight - 20
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop >= threshold && !this.isContentLoad) {
      this.isContentLoad = true
      this.loadContent()
    } else if (scrollTop <= threshold && this.isContentLoad) {
      this.isContentLoad = false
    }
  }

  loadContent() {
    this.props.takeMatches()
  }

  scrollUp = () => {
    window.scrollTo(0, 0)
    this.setState({
      isOnTheTop: !this.state.isOnTheTop,
    })
  }

  render() {
    const { completedMatches, pageNumber } = this.props
    const { isOnTheTop } = this.state

    return (
      <div>
        <ScheduledMatches />
        <CompletedMatches completedMatches={completedMatches} />
        <BtnUp onClick={() => this.scrollUp()}>
          {pageNumber > 1 && !isOnTheTop ? (
            <BtnUpImg src={arrow} alt={'arrow'} />
          ) : null}
        </BtnUp>
      </div>
    )
  }
}

export default HomePage
