import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { hot } from 'react-hot-loader/root';
import ThemeContext from '../../Context/ThemeContext';
import '../../styles/Checkout.scss';
import product from '../../assets/dashboard/latest-product.png';
import darkDelete from '../../assets/dashboard/delete-dark.png';
const Checkout = (props) => {
  const { theme } = useContext(ThemeContext);
  const LatestCheckoutData = Array(30).fill('')
  const [open, setOpen ] = useState(false);
  console.log(props);
  return (
    <div className={`${theme}Checkout`}>
      <div className={`${theme}CheckHeader`}>
        <div className="MonthCheckout">
          <span className="monthly__text">Monthly</span>
          <span className={`${theme}LatestCheckout`}>Latest Checkouts</span>
        </div>

      </div>
      <div className="Content">
        <div className="CheckContent">
          {
            LatestCheckoutData.map((item, index)=>
              <div className="checkoutData" key={index}>
                <img src={product} alt='product' />
                <span className={`${theme}Brand`}>Nike</span>
                <span className={`${theme}Product`}>Travis Scott Air Jordan 1</span>
                <span className={"SiteName"}>Eastbay</span>
                <span className={`${theme}Profiles`}>Example Profile 1</span>
                <span className={`${theme}Price`}>$180 / US6</span>
              </div>
            )
          }
        </div>
      </div>
      <div className="clearList">
        <button className="clearBtn" onClick={()=>props.close(true)}>Clear Checkout List</button>
      </div>
    </div>
  )

};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, actions)(hot(Checkout));
