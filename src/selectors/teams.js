export const getTeams = state =>
  state.teams.map(x => {
    x = x.teamName
    return x
  })
