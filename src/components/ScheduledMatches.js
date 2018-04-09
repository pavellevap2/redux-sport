import React from 'react'
import ScheduledMatch from './ScheduledMatch'

class ScheduledMatches extends React.Component {
  componentDidMount() {
    this.props.takeScheduledMatches()
  }

  render() {
    const { scheduledMatches } = this.props
    return (
      <ul>
        {scheduledMatches.map((match, i) => (
          <ScheduledMatch match={match} key={i} />
        ))}
      </ul>
    )
  }
}
export default ScheduledMatches
