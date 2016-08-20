const Router = require('./router.js');
console.log("It's working!");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("WE HAVE LIFT OFF!");
  handleClick();
  let node = document.querySelector('.content');
  let router = new Router(node);
  router.start();
});

function handleClick() {
  let sidebar = document.getElementsByClassName('sidebar-nav');
  // debugger;
  let children = sidebar[0].children;
  for(let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", () => {
      let linkText = children[i].textContent.toLowerCase();
      window.location.hash = linkText;
    });
  }
}
