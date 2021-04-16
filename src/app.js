/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  function randomNum(let element){
      let index = Math.floor(Math.random()*element.length);
  };

  function excuse{
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    console.log(who[randomNum(who)], action[randomNum(action)], what[randomNum(action)], when[randomNum(when)]);
};
    document.getElementById('excuse');
    console.log(excuse());
};
