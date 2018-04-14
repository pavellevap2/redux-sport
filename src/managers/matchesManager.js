import ENDPOINTS from '../api'
import * as R from 'ramda'
import moment from 'moment'

export const fetchMatches = R.pipeP(
  (limit, offset) => fetch(ENDPOINTS.GET_COMPLETED_MATCHES(limit, offset)),
  data => data.json(),
  R.path(['response', 'data']),
  R.map(
    R.applySpec({
      firstTeamName: R.path(['competitors', '0', 'clubName']),
      secondTeamName: R.path(['competitors', '1', 'clubName']),
      firstImg: item =>
        R.path(['competitors', '0', 'images', 'logo', 'S1'], item) === undefined
          ? R.path(['competitors', '0', 'images', 'logo', 'T1', 'url'], item)
          : R.path(['competitors', '0', 'images', 'logo', 'S1', 'url'], item),

      secondImg: item =>
        R.path(['competitors', '1', 'images', 'logo', 'S1'], item) === undefined
          ? R.path(['competitors', '1', 'images', 'logo', 'T1', 'url'], item)
          : R.path(['competitors', '1', 'images', 'logo', 'S1', 'url'], item),
      dateTimeUTC: R.prop('matchTimeUTC'),
      status: R.prop('matchStatus'),
      firstTeamScore: R.pipe(
        R.path(['competitors', 0, 'scoreString']),
        score => (score ? parseInt(score, 10) : 0),
      ),
      secondTeamScore: R.pipe(
        R.path(['competitors', 1, 'scoreString']),
        score => (score ? parseInt(score, 10) : 0),
      ),
      dateNumber: R.pipe(R.prop('matchTime'), moment, x =>
        moment(x, 'YYYY-ММ-DD').valueOf(),
      ),
      dateTimeMSK: R.pipe(
        R.prop('matchTimeUTC'),
        x => `${x.slice(5, 10)}/${x.slice(10, 16)} MSK`,
      ),
      venueName: R.path(['venue', 'venueName']),
    }),
  ),
  R.sort(R.ascend(R.prop('dateNumber'))),
)
