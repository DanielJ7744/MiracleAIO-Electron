// @flow
import * as React from 'react';
import deleteActive from '../../assets/profile/deleteActive.png';
import deleteIcon from '../../assets/tasks/delete.svg';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';

export const ProxyGroup = ({ active, ProxyGroup, idx, setActive, title, callback }) => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const className = active ? 'ProxyGroup__content ' + `${theme}activeProxyGroup` : 'ProxyGroup__content';
  const HandleSelect = () => {
    setActive(ProxyGroup);
  };
  const GroupDelete = () => {
    // setOpen(true);
    // callback(open);
    // title(ProfileGroup.name);
  };
  return (
    <div className={className} onClick={HandleSelect}>
      <div className={`${theme}ProxiesGroup`}>
        <div className={`${theme}__Proxy__left`}>
          <div className={`${theme}__ProxyGroup__header`}>
            <span className={`${theme}__name`}>{ProxyGroup.name}</span>
            <span className={`${theme}__subtitle`}>{ProxyGroup.proxiesArr.length} Proxies</span>
          </div>
        </div>
        <div className={`${theme}__ProxyGroup__right`}>{active ? <img src={deleteActive} alt="" onClick={GroupDelete} /> : <img src={deleteIcon} alt="" onClick={GroupDelete} />}</div>
      </div>
    </div>
  );
};

export default ProxyGroup;
