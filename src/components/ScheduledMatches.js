import React from 'react'

class ScheduledMatches extends React.Component {
  componentDidMount() {
    this.props.takeScheduledMatches()
  }

  render() {
    const { scheduledMatches } = this.props
    return (
      <div>
        <button onClick={() => console.log(scheduledMatches)}>matches</button>
      </div>
    )
  }
}
export default ScheduledMatches
