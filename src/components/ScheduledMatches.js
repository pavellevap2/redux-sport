import React from 'react'
import ScheduledMatch from './ScheduledMatch'
import styled from 'styled-components'

const MatchesWrapper = styled.div`
  overflow-x: hidden;
`

const MatchesContainer = styled.ul`
  display: flex;
  transform: translateX(${props => props.offset * -33.339}%);
  transition: transform 0.3s;
`

class ScheduledMatches extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemPosition: 0,
    }
  }

  componentDidMount() {
    this.props.takeScheduledMatches()
  }

  render() {
    console.log(this.state.itemPosition)
    const { scheduledMatches } = this.props
    return (
      <MatchesWrapper>
        <MatchesContainer offset={this.state.itemPosition}>
          {scheduledMatches.map((match, i) => (
            <ScheduledMatch match={match} key={i} />
          ))}
        </MatchesContainer>
        <button
          onClick={() =>
            this.setState({ itemPosition: this.state.itemPosition + 1 })
          }
        >
          next
        </button>
      </MatchesWrapper>
    )
  }
}
export default ScheduledMatches
