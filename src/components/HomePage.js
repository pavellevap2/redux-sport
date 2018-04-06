import React from 'react'
import * as R from 'ramda'
import CompletedMatches from './CompletedMatches'
class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.takeMatches()
  }

  render() {
    const { completedMatches } = this.props

    return (
      <div>
        <CompletedMatches completedMatches={completedMatches} />
        <button onClick={() => console.log(completedMatches)}>test</button>
      </div>
      ///limit offset 10 page 10 pagination api
    )
  }
}
export default HomePage
