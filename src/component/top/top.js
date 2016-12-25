import styles from './top.css';
import template from './top.pug';
import $ from 'jquery';

let data = {
  name: 'top'
};

const html = template(data);

const top = {
  init: function(){
    console.log(222);
    $('#div2').html(html);
  }
}

export {top};
