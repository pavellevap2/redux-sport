import React from 'react'
import ScheduledMatch from './ScheduledMatch'
import styled from 'styled-components'

const MatchesWrapper = styled.div`
  overflow-x: hidden;
`

const MatchesContainer = styled.ul`
  display: flex;
  width: 110%;
  transform: translateX(${props => props.offset * -32.3 + '%'});
  transition: transform 0.3s;
`

class ScheduledMatches extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemStep: 0,
    }
  }

  componentDidMount() {
    this.props.takeScheduledMatches()
  }

  nextStep = () => {
    if (this.state.itemStep < this.props.scheduledMatches.length - 3)
      this.setState({
        itemStep: this.state.itemStep + 1,
      })
  }

  prevStep = () => {
    if (this.state.itemStep > 0) {
      this.setState({
        itemStep: this.state.itemStep - 1,
      })
    }
  }
  render() {
    const { scheduledMatches } = this.props
    const { itemStep } = this.state

    return (
      <MatchesWrapper>
        <MatchesContainer offset={itemStep}>
          {scheduledMatches.map((match, i) => (
            <ScheduledMatch match={match} key={i} />
          ))}
        </MatchesContainer>
        <button onClick={() => this.prevStep()}>prev</button>
        <button onClick={() => this.nextStep()}>next</button>
      </MatchesWrapper>
    )
  }
}

export default ScheduledMatches
