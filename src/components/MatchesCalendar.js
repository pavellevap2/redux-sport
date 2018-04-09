import React from 'react'

class MatchesCalendar extends React.Component {
  componentDidMount() {
    this.props.takeScheduledMatches()
  }

  render() {
    return <div>calendar</div>
  }
}
export default MatchesCalendar
