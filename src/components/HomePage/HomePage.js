import React from 'react'
import CompletedMatches from '../CompletedMatches'
import ScheduledMatches from '../../containers/ScheduledMatchesContainer'
import styled from 'styled-components'
import arrow from './arrow.png'
import preloader from './preloader.jpg'

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

const Preloader = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const PreloaderImg = styled.img.attrs({ src: preloader, alt: 'preloader' })`
  margin-top: 2em;
  animation: preloader-logo-spin infinite 30s linear;
  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const LilPreloderContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const LilPreloader = styled.img.attrs({ src: preloader, alt: 'preloader' })`
  margin-top: 4em;
  width: 20em;
  height: 7em;
  animation: preloader-logo-spin infinite 30s linear;
  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
    const {
      completedMatches,
      pageNumber,
      isMatchesLoading,
      isScheduledMatchesLoading,
      limit,
    } = this.props
    const { isOnTheTop } = this.state
    return (
      <div>
        {!isMatchesLoading && !isScheduledMatchesLoading && pageNumber <= 1 ? (
          <Preloader>
            <PreloaderImg />
          </Preloader>
        ) : (
          <div>
            <ScheduledMatches />
            {!isScheduledMatchesLoading ? null : (
              <div>
                <CompletedMatches completedMatches={completedMatches} />
                {limit ? (
                  <LilPreloderContainer>
                    <LilPreloader />
                  </LilPreloderContainer>
                ) : null}

                <BtnUp onClick={this.scrollUp}>
                  {pageNumber > 1 && !isOnTheTop ? (
                    <BtnUpImg src={arrow} alt={'arrow'} />
                  ) : null}
                </BtnUp>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default HomePage
