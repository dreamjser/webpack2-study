import styles from './mask.css';
import template from './mask.pug';

let data = {
  name: 'syg'
};

const html = template(data);

const mask = {
  init: function(){
    console.log(111);
    document.getElementById('div').innerHTML = html;
  }
}

export default mask;
