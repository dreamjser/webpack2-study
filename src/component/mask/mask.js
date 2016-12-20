import styles from './mask.css';
import template from './mask.pug';
import $ from 'jquery';

let data = {
  name: 'syg'
};

const html = template(data);

const mask = {
  init: function(){
    console.log(111);
    $('#div').html(html);
  }
}

export {mask};
