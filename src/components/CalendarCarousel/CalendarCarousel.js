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
  transition: transform 1s;
`

const SlideItem = styled.div`
  flex-shrink: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
`

const SlideItemText = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${props => props.width};
  background: rgba(29, 30, 48, 0.7);
  color: ${props => props.theme.primary};
  font-size: ${props => props.size};
  &:hover {
    transition: 1s;
    background: rgba(29, 30, 48, 1);
  }
`

const SlideItemTitle = styled.h3`
  font-size: 1.3em;
  padding: 0.003em 0;
  margin: 0;
`

const SlideImg = styled.img`
  width: 100%;
  height: 80vh;
`

const SlidesNav = styled.ol`
  position: absolute;
  bottom: 10%;
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
                ○
              </SlidesBtn>
            </SlideNavItem>
          ))}
        </SlidesNav>
        <SlidesContainer offset={this.state.slideStep}>
          {SLIDES.map((slide, i) => (
            <SlideItem>
              {i % 2 === 0 ? (
                <SlideItemText size={'2em'} width="30%" top="55%" left="15%">
                  <SlideItemTitle>«Калев» — ЦСКА,</SlideItemTitle>
                  <p>
                    «Цмоки-Минск» — «Химки». <br />
                    Анонс матчей 11 и 12 апреля пройдут два матча регулярного
                    чемпионата.
                  </p>
                </SlideItemText>
              ) : (
                <SlideItemText size={'1em'} width="45%" top="35%" left="10%">
                  <SlideItemTitle>Топ 10 моментов недели</SlideItemTitle>
                  <p>
                    Шакил Маккиссик держит марку, Дмитрий Узинский опровергает
                    расхожие штампы, а Трентон Локетт и Мелвин Эджим – казанские
                    летчики.
                  </p>
                </SlideItemText>
              )}

              <SlideImg src={slide} alt="logo" />
            </SlideItem>
          ))}
        </SlidesContainer>
      </SlidesWrapper>
    )
  }
}

export default CalendarCarousel
