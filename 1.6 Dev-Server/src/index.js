import './style/index.css';

document.querySelector('#app').innerHTML = 'Hello Plugin update!'; 

if(module.hot) {
  module.hot.accept()
}