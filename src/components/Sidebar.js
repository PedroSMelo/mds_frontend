import React from 'react';

const menuList = [
  {
    id: 1,
    icon: 'bell',
    name: 'Menu Group 1',
    url: 'https://www.google.com.br/',
  },
  {
    id: 2,
    icon: 'bell',
    name: 'Nível 1',
    list: [
      {
        icon: 'address-book',
        name: 'Nivel 2',
        url: 'javascript:void(0)',
        list: [
          {
            icon: 'tree',
            name: 'Nivel 3',
            url: 'javascript:void(0)',
            list: [
              {
                icon: 'tree',
                name: 'Nivel 4',
                url: 'javascript:void(0)',
              },
              {
                icon: 'tree',
                name: 'Nivel 4',
              },
            ],
          },
          {
            icon: 'tree',
            name: 'Nivel 3',
            url: 'javascript:void(0)',
          },
        ],
      },
      {
        icon: 'heart',
        name: 'Nivel 2',
        url: 'javascript:void(0)',
      },
    ],
  },
  {
    id: 3,
    icon: 'bell',
    name: 'Menu Group 3',
    isSpaLinkBehavior: 'true',
    url: '/input',
  },
];

const MenuItem = ({ item }) => (
  <div>
    <a href={item.url || 'javascript:void(0)'}>
      <i className={`fas fa-${item.icon}`}></i> {item.name}
    </a>
    {item.list && (
      <div style={{ paddingLeft: '20px' }}>
        {item.list.map((subItem, index) => (
          <MenuItem key={index} item={subItem} />
        ))}
      </div>
    )}
  </div>
);

const Menu = () => (
    <div  id="main-navigation">
      <div class="menu-container">
        <div class="menu-panel">
          <div class="menu-header">
            <div className="row">
              <div className="col-sm-4 col-lg-3">
                <div className="menu">
                  {menuList.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Menu;
