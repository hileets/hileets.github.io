let root = document.querySelector('#root');

let header = React.createElement('h1', { className: 'header' }, 'hileets');
let text = React.createElement('p', { className: 'text date' }, `January 2018 - March 2020`);
let employeeslist = React.createElement(
  'p',
  { className: 'text margin' },
  'Some amazing leets worked at hileets',
  React.createElement(
    'p',
    null,
    'Syeda Mamuna Hussain - Abdur Rehman - Salman Ahmed - Talha Khan - Hasnain Akbar',
  ),
);

let regards = React.createElement(
  'div',
  { className: 'text small' },
  'Until next time,',
  React.createElement(
    'p',
    { className: 'text date' },
    React.createElement(
      'a',
      {
        href: 'https://saiem.pro',
        target: '_blank',
      },
      'Saiem Saeed',
    ),
  ),
);
let footer = React.createElement('div', { className: 'text small' }, '© 2018 hileets');

let container = () =>
  React.createElement(
    'div',
    { className: 'container' },
    header,
    text,
    employeeslist,
    regards,
    footer,
  );
let clip = () => React.createElement('div', { className: 'clip' });
let App = () => React.createElement('div', null, clip(), container());

function render() {
  ReactDOM.render(App(), root);
}

render();
