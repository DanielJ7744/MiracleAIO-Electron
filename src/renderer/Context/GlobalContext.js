import React, { createContext, useContext, useState } from 'react';

const AccountGroups = [
  {
    id: 101,
    name: 'Account Group 1',
    accountArr: [
      {
        id: 101,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 102,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 103,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 104,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 104,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ],
  },
  {
    id: 102,
    name: 'Account Group 2',
    accountArr: [
      {
        id: 101,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 102,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 103,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 104,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 105,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ],
  },
  {
    id: 103,
    name: 'Account Group 3',
    accountArr: [
      {
        id: 101,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 102,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 103,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ],
  },
  {
    id: 104,
    name: 'Account Group 4',
    accountArr: [
      {
        id: 101,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 102,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 103,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ],
  },
  {
    id: 105,
    name: 'Account Group 5',
    accountArr: [
      {
        id: 101,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 102,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
      {
        id: 103,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ],
  },
];
const profGr = [
  {
    id: 1011,
    name: 'Profile Group 1',
    profilesArr: [
      {
        id: 1001,
        name: 'Profile 1',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1002,
        name: 'Profile 2',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1003,
        name: 'Profile 3',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1004,
        name: 'Profile 4',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1005,
        name: 'Profile 5',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1006,
        name: 'Profile 6',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
    ],
  },
  {
    id: 1012,
    name: 'Profile Group 2',

    profilesArr: [
      {
        id: 1101,
        name: 'Profile 11',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1102,
        name: 'Profile 22',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
      {
        id: 1103,
        name: 'Profile 33',
        phone: 'Phone Number',
        key: '441',
        dueDate: '12/23',
        cardholder: 'Max Mustermann',
        email: 'Email@gmail.com',
      },
    ],
  },
];
const proxGroups = [
  {
    id: 20001,
    name: 'Proxy Group 1',
    proxiesArr: [
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
    ],
  },
  {
    id: 20002,
    name: 'Proxy Group 2',
    proxiesArr: [
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
      {
        id: '1AF',
        url: 'IP:PORT:USERNAME:PASSWORD',
        delay: '23 ms',
      },
    ],
  },
];
const notification = [
  {
    id: 1,
    statusText: 'Successful Checkout !',
    siteName: 'Footlocker US',
    productImg: require('../assets/dashboard/release-product.png'),
    region: 'US 8',
    price: '180',
    profile: '',
    time: '1',
    brand: 'Nike',
    productName: 'Travis Scott Air Jordan 1',
    status: 'success',
  },
  {
    id: 2,
    statusText: 'Successful Checkout !',
    siteName: 'Footlocker US',
    productImg: require('../assets/dashboard/release-product.png'),
    region: 'US 8',
    price: '180',
    profile: '',
    time: '1',
    brand: 'Nike',
    productName: 'Travis Scott Air Jordan 1',
    status: 'success',
  },
  {
    id: 3,
    statusText: 'Card Declined !',
    siteName: 'Footlocker US',
    productImg: require('../assets/dashboard/release-product.png'),
    region: 'US 8',
    price: '180',
    profile: '',
    time: '1',
    brand: 'Nike',
    productName: 'Travis Scott Air Jordan 1',
    status: 'decline',
  },
  {
    id: 4,
    statusText: 'Queue Passed !',
    siteName: 'Footlocker US',
    productImg: require('../assets/dashboard/release-product.png'),
    region: 'US 8',
    price: '180',
    profile: '',
    time: '1',
    brand: 'Nike',
    productName: 'Travis Scott Air Jordan 1',
    status: 'Queue Passed',
  },
  {
    id: 5,
    statusText: 'Successful Checkout !',
    siteName: 'Footlocker US',
    productImg: require('../assets/dashboard/release-product.png'),
    region: 'US 8',
    price: '180',
    profile: '',
    time: '1',
    brand: 'Nike',
    productName: 'Travis Scott Air Jordan 1',
    status: 'success',
  },
];

export const globalContext = createContext();

export const useGlobal = () => {
  return useContext(globalContext);
};

export const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  const [tasks, setTasks] = useState([
    {
      name: 'Task Group 1',
      id: 1,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        ,
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike Travis Scott Air Jordan 1',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
    {
      name: 'Task Group 2',
      id: 2,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          status: 'Successfully Checked Out',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
    {
      name: 'Task Group 3',
      id: 3,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Blue',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 2',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Blue',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 1',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
    {
      name: 'Task Group 4',
      id: 4,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
    {
      name: 'Task Group 5',
      id: 5,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          mode: 'Request Mode',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
    {
      name: 'Task Group 6',
      id: 6,
      taskArr: [
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
        {
          id: '1AF',
          profile: 'Profile 1',
          site: 'Footlocker US',
          product: 'Nike SB Dunk Low Pro Red',
          status: 'Successfully Checked Out',
          proxy: 'Proxy List 2',
          icons: 'true',
          size: '',
          account: '',
          region: '',
          quantify: '',
        },
      ],
    },
  ]);
  const [tasksGroups, setTaskGroups] = useState(tasks);
  const [activeTaskGr, setActiveTaskGr] = useState(tasks[0]);
  const [AccountGroup, setAccountGroups] = useState(AccountGroups);
  const [activeAccountGr, setActiveAccountGr] = useState(AccountGroups[0]);
  const [profileGroups, setProfileGroups] = useState(profGr);
  const [activeProfileGr, setActiveProfileGr] = useState(profileGroups[0]);
  const [activeProfileGrg, setActiveProfileGrg] = useState(profileGroups[0].profilesArr);
  const [proxiesGroups, setProxiesGroups] = useState(proxGroups);
  const [activeProxiesGr, setActiveProxiesGr] = useState(proxiesGroups[0]);
  const [mode, setMode] = useState('Profile');
  const [notificationData, setNotification] = useState(notification);
  return (
    <globalContext.Provider
      value={{
        activeTaskGr,
        setActiveTaskGr,
        loggedIn,
        setLoggedIn,
        tasks,
        setTasks,
        AccountGroup,
        setAccountGroups,
        activeAccountGr,
        setActiveAccountGr,
        profileGroups,
        setProfileGroups,
        activeProfileGr,
        setActiveProfileGr,
        proxiesGroups,
        setProxiesGroups,
        activeProxiesGr,
        setActiveProxiesGr,
        tasksGroups,
        setTaskGroups,
        activeProfileGrg,
        setActiveProfileGrg,
        mode,
        setMode,
        notificationData,
        setNotification,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
