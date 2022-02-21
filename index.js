let root = document.querySelector('#root');

let header = React.createElement('h1', { className: 'header' }, 'hileets');
let text = React.createElement(
  'p',
  { className: 'text' },
  `After working with the React team for a year, I decided to take a break from the React ecosystem and start my own.`,
);

let container = () => React.createElement('div', { className: 'container' }, header, text);
let clip = () => React.createElement('div', { className: 'clip' });
let App = () => React.createElement('div', null, clip(), container());

function render() {
  ReactDOM.render(App(), root);
}

render();
