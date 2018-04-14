import React from 'react'
import ScheduledMatch from './ScheduledMatch'
import styled from 'styled-components'

const MatchesWrapper = styled.div`
  margin-top: 3vh;
  overflow-x: hidden;
  padding: 0;
  position: relative;
`

const MatchesContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  transform: translateX(${props => props.offset * -25 + '%'});
  transition: transform 0.3s;
  align-items: center;
`

const MatchesBtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 0%;
  background-color: inherit;
  z-index: 3;
  border: none;
  transform: translateY(-55%);
  font-size: 4em;
`

const MatchesBtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-55%);
  background-color: inherit;
  border: none;
  z-index: 3;
  font-size: 4em;
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

  showNextSlide = () => {
    if (this.state.itemStep < this.props.scheduledMatches.length - 4)
      this.setState({
        itemStep: this.state.itemStep + 1,
      })
  }

  showPrevSlide = () => {
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
        <MatchesBtnLeft onClick={this.showPrevSlide}>{'<'}</MatchesBtnLeft>
        <MatchesBtnRight onClick={this.showNextSlide}>{'>'}</MatchesBtnRight>
      </MatchesWrapper>
    )
  }
}

export default ScheduledMatches
