import React from 'react'
import firstImg from './main-1.jpg'
import secondImg from './main-2.jpg'
import styled from 'styled-components'

const SLIDES = [firstImg, secondImg, firstImg, secondImg]

const SlidesWrapper = styled.div`
  overflow-x: hidden;
`

const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${props => props.offset * -100 + '%'});
  transition: transform 0.3s;
`

const SlideItem = styled.div`
  flex-shrink: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const SlideImg = styled.img`
  width: 100%;
  height: 80vh;
`
const SlidesNav = styled.ol`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  list-style: none;
`
const SlideNavItem = styled.li`
  padding: 0 1em;
`
const SlidesBtn = styled.button`
  color: ${props => props.color};
  background: none;
  border: none;
  font-size: 2em;
  font-weight: bold;
`

class CalendarCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideStep: 0,
    }
  }

  componentDidMount() {
    this.sliderInterval = setInterval(this.showNextSlide, 3500)
  }

  showNextSlide = () => {
    const slideStep = this.state.slideStep

    if (slideStep === 3) {
      this.setState({
        slideStep: 0,
      })
    } else {
      this.setState({
        slideStep: slideStep + 1,
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval)
  }

  render() {
    const { slideStep } = this.state

    return (
      <SlidesWrapper>
        <SlidesNav>
          {SLIDES.map((_, i) => (
            <SlideNavItem key={i}>
              <SlidesBtn
                id={i}
                color={slideStep === i ? 'darkgray' : 'white'}
                onClick={() => this.setState({ slideStep: i })}
              >
                o
              </SlidesBtn>
            </SlideNavItem>
          ))}
        </SlidesNav>
        <SlidesContainer offset={this.state.slideStep}>
          {SLIDES.map((slide, i) => (
            <SlideItem>
              <SlideImg src={slide} alt="logo" />
            </SlideItem>
          ))}
        </SlidesContainer>
      </SlidesWrapper>
    )
  }
}

export default CalendarCarousel
