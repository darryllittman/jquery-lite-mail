class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.onhashchange = () => {
      let content = document.querySelector('.content');
      new Router(content);
      this.render();
    };
  }

  render() {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let newP = document.createElement("p");
    let newC = document.createTextNode(`${currentRoute}`);
    newP.appendChild(newC);
  }

  activeRoute() {
    let route = window.location.hash;
    route = route.shift();
    return route;
  }
}

module.exports = Router;
