import React, { useContext } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { hot } from 'react-hot-loader/root';
import '../../styles/SiteChart.scss';
import ThemeContext from '../../Context/ThemeContext';

const SiteChart = () => {
  const { theme } = useContext(ThemeContext);
  const SiteData = [
    {
      id: 1,
      siteName: 'Site1',
      checkout: 'Checkouts',
      checkoutNum: '153',
    }, {
      id: 2,
      siteName: 'Site2',
      checkout: 'Checkouts',
      checkoutNum: '2453',
    }, {
      id: 3,
      siteName: 'Site3',
      checkout: 'Checkouts',
      checkoutNum: '2453',
    },

  ];
  return (
    <div className={`${theme}Site`}>
      <div className='Sites'>
        {
          SiteData.map((item, index)=>
            <div className={`${theme}site__list`} key={index}>
              <div className={`${theme}siteName`}>{item.siteName}</div>
              <div className='checkout_num'>
                <span className={`${theme}checkouts`}>{item.checkout}</span>
                <span className={`${theme}checkoutNum`}>{item.checkoutNum}</span>
              </div>
            </div>
          )
        }

      </div>
      <div className="chartPart">
        charts
      </div>
    </div>
  );

};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actions)(hot(SiteChart));
