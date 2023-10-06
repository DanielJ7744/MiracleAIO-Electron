import React, { useContext } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { hot } from 'react-hot-loader/root';
import ThemeContext from '../../Context/ThemeContext';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import '../../styles/Total.scss';

const Total = () => {
  const { theme } = useContext(ThemeContext);
  const totalCheckout = 23;
  const totalCart = 43;
  const totalDecline = 4;

  return (
    <div className={`${theme}Total__Wrapper`}>
      <div className="total__checkout">
        <div className="total__text">Total</div>
        <div className="checkout__text">Checkouts</div>
        <div className="interval__border" />
        <div className="total__chart__part">
          <div style={{ width: 60, height: 60, paddingTop:'15px' }}>
            { theme==='dark'?
              <CircularProgressbar
                value={`${totalCheckout}`}
                text={2453}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '12px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#CE7CFF',
                  textColor: '#FFF',
                  trailColor: '#121215',
                })}
              /> :
            <CircularProgressbar
              value={`${totalCheckout}`}
              text={2453}
              styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '12px',
                pathTransitionDuration: 0.5,
                pathColor: '#CE7CFF',
                textColor: '#363636',
                trailColor: '#F0F2F9',
              })}
            />
            }
          </div>
          <div className="checkout__num">
            <span>+</span>
            <div className="numbers">
              <span>23</span>
              <span>%</span>
            </div>
          </div>
        </div>

      </div>
      <div className="total__carted">
        <div className="total__text">Total</div>
        <div className="carted__text">Carted</div>
        <div className="interval__border" />
        <div className="total__chart__part">
          <div style={{ width: 60, height: 60, paddingTop:'15px' }}>
            {theme==='dark'?<CircularProgressbar
              value={`${totalCart}`}
              text={8453}
              styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '12px',
                pathTransitionDuration: 0.5,
                pathColor: '#B4F6FF',
                textColor: '#FFF',
                trailColor: '#121215',
              })}
            />:
            <CircularProgressbar
                value={`${totalCart}`}
                text={8453}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textSize: '12px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#B4F6FF',
                    textColor: '#363636',
                    trailColor: '#F0F2F9',
                  })}
            />
            }
          </div>
          <div className="carted__num">
            <span>+</span>
            <div className="numbers">
              <span>43</span>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="total__declines">
        <div className="total__text">Total</div>
        <div className="decline__text">Declines</div>
        <div className="interval__border" />
        <div className="total__chart__part">
          <div style={{ width: 60, height: 60, paddingTop:'15px' }}>
            {theme==='dark' ?
              <CircularProgressbar
                value={`${totalDecline}`}
                text={2453}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '12px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#FF8990',
                  textColor: '#FFF',
                  trailColor: '#121215',
                })}
              />: <CircularProgressbar
                value={`${totalDecline}`}
                text={2453}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '12px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#FF8990',
                  textColor: '#363636',
                  trailColor: '#F0F2F9',
                })}
              />
            }
          </div>
          <div className="decline__num">
            <span>+</span>
            <div className="numbers">
              <span>4</span>
              <span>%</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )

};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, actions)(hot(Total));
