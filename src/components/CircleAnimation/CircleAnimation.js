import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin'
import './CircleAnimation.scss'

TweenOne.plugins.push(PathPlugin)

class CircleAnimation extends React.Component {
  constructor(props) {
    super(props);    
    this.path = 'm25,250c0,-124.309392 100.690608,-225 225,-225c124.309392,0 225,100.690608 225,225c0,124.309392 -100.690608,225 -225,225c-124.309392,0 -225,-100.690608 -225,-225z';
    this.animation = {
      path: this.path,
      repeat: -1,
      duration: 15000,
      ease: 'linear',
      yoyo: false
    }
  }  

  render() {

  const duration = 7000;
  const ease = 'easeInOutSine';  
  const easePath = 'M0,100 C7.33333333,89 14.3333333,81.6666667 21,78 C25.3601456,75.6019199 29.8706084,72.9026327 33,70 C37.0478723,66.2454406 39.3980801,62.0758689 42.5,57 C48,46.5 61.5,32.5 70,28 C77.5,23.5 81.5,20 86.5,16 C89.8333333,13.3333333 94.3333333,8 100,0';
  const loop = {
    yoyo: true,
    repeat: -1,
    duration,
    ease,
  };

    const animate = {
        redSquare: { 
          ...loop,
          y: 15,
          duration: 3000,
          delay: 200,
        },
        greenBall: {
          path: this.path,
          duration: 18000,
          repeat: -1,
          ease: TweenOne.easing.path(easePath, { lengthPixel: 1500 }),
        },
        greenBallRepeat: {
          path: this.path,
          duration: 25000, 
          repeat: -1,
          ease: TweenOne.easing.path(easePath, { lengthPixel: 5000 }),
        },
        greenBallRepeat1: {
          path: this.path,
          duration: 55000,
          repeat: -1,
          ease: TweenOne.easing.path(easePath, { lengthPixel: 5000 }),
        },
        track: {
          ...loop,
          rotate: 15,
        },
      };

    return (
      <div>
        {/* <svg width="500px" height="500px" viewBox="0 0 500 500">
          <defs>
            <path
              d="M151,55 C129.666667,62.6666667 116,74.3333333 110,90 C104,105.666667 103,118.5 107,128.5 L225.5,96 C219.833333,79 209.666667,67 195,60 C180.333333,53 165.666667,51.3333333 151,55 L137,0 L306.5,6.5 L306.5,156 L227,187.5 L61.5,191 C4.5,175 -12.6666667,147.833333 10,109.5 C32.6666667,71.1666667 75,34.6666667 137,0 L151,55 Z"
              id="mask"
            />
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0, 30)">
            {/* красный квадратик 
                <g id="Group-13" transform="translate(0.000000, 41.000000)">
              <TweenOne component="g" animation={animate.redSquare}>
                <rect
                  stroke="#F5222D"
                  strokeWidth="1.6"
                  transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) "
                  x="176.8"
                  y="150.8"
                  width="14.4"
                  height="14.4"
                  rx="3.6"
                />
              </TweenOne>
            </g>
            
            <g id="Group-14" transform="translate(150.000000, 230.000000)">
              <g id="Group-22" transform="translate(62.000000, 7.000000)">
                <image
                  id="cc4"
                  alt="globe"
                  xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/FpKOqFadwoFFIZFExjaf.png"
                  width="151px"
                  height="234px"
                />
              </g>
              {/* <mask id="mask-2">
                <use xlinkHref="#mask" fill="white" transform="translate(-42, -33)" />
              </mask>
              <g mask="url(#mask-2)">
                <TweenOne component="g" animation={animate.track} style={{ transformOrigin: '122.7px 58px' }}>
                  <g transform="translate(-16, -52)">
                    <g transform="translate(16, 52)">
                      <path
                        d={ this.path }
                        id="line-s"
                        stroke="#0D1A26"
                        strokeWidth="1.35"
                        strokeLinecap="round"
                        transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) "
                      />
                    </g>
                    <TweenOne component="g" animation={animate.greenBall}>
                      <image
                        alt="globe"
                        id="id2"
                        xlinkHref="./img/icon1.png"
                        x="16"
                        y="62"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id2"
                        xlinkHref="./img/icon1.png"
                        x="-32"
                        y="62"
                        width="38px"
                        height="38px"
                      />
                    </TweenOne>
                  </g>
                </TweenOne>
              </g>
            </g>
          </g>
        </svg>   */}
        
         <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">             
            <g>            
                <path id="svg_1" d={this.path} strokeOpacity="null" strokeLinecap="null" strokeLinejoin="null" strokeWidth="1.5" stroke="#ECECEC" fillOpacity="null" fill="none"/>
            </g>
            <TweenOne component="g" animation={animate.greenBall}>                      
                      <image
                        alt="globe"
                        id="id1"
                        xlinkHref="./img/icon1.png"
                        x="-90"
                        y="-10"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id2"
                        xlinkHref="./img/icon2.png"
                        x="110"
                        y="20"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id3"
                        xlinkHref="./img/icon3.png"
                        x="200"
                        y="250"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id4"
                        xlinkHref="./img/icon4.png"
                        x="80"
                        y="410"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id5"
                        xlinkHref="./img/icon5.png"
                        x="-130"
                        y="400"
                        width="38px"
                        height="38px"
                      />
                      <image
                        alt="globe"
                        id="id6"
                        xlinkHref="./img/icon6.png"
                        x="-250"
                        y="170"
                        width="60px"
                        height="60px"
                      />
            </TweenOne> 
              <g>                
                <rect fill="none" id="canvas_background" height="402" width="402" y="-1" x="-100"/>
              </g>
              <g>
                <ellipse stroke="#EFEFEF" ry="151" rx="151" id="svg_2" cy="248" cx="248" strokeWidth="1.5" fill="#fff" />
             </g>
             <TweenOne component="g" animation={animate.greenBallRepeat}>                      
                      <image
                        alt="globe"
                        id="id7"
                        xlinkHref="./img/icon7.png"
                        x="-110"
                        y="60"
                        width="71px"
                        height="71px"
                      />
                      <image
                        alt="globe"
                        id="id8"
                        xlinkHref="./img/icon8.png"
                        x="90"
                        y="100"
                        width="61px"
                        height="61px"
                      />
                      <image
                        alt="globe"
                        id="id9"
                        xlinkHref="./img/icon9.png"
                        x="70"
                        y="300"
                        width="71px"
                        height="71px"
                      />
                      <image
                        alt="globe"
                        id="id10"
                        xlinkHref="./img/icon10.png"
                        x="-150"
                        y="280"
                        width="56px"
                        height="56px"
                      />
            </TweenOne> 
            <g>                
                <rect fill="none" id="canvas_background" height="102" width="102" y="-1" x="-100"/>
              </g>
              <g>
                <ellipse stroke="#EFEFEF" ry="70" rx="70" id="svg_2" cy="248" cx="248" strokeWidth="1.5" fill="#fff" />
             </g>
             <TweenOne component="g" animation={animate.greenBallRepeat1}>                      
                      <image
                        alt="globe"
                        id="id7"
                        xlinkHref="./img/icon11.png"
                        x="-80"
                        y="220"
                        width="25px"
                        height="25px"
                      />
            </TweenOne> 
            <g>                
                <rect fill="none" id="canvas_background" height="82" width="82" y="-1" x="-100"/>
              </g>
              <g>
                <ellipse stroke="#EFEFEF" ry="51" rx="51" id="svg_2" cy="248" cx="248" strokeWidth="1.5" fill="#efefef" />                
             </g>

        </svg>
      </div>
    );
  }
}
export default CircleAnimation

CircleAnimation.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
