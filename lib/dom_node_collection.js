class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    return new DOMNodeCollection(document.querySelectorAll(string));
  }

  empty() {
    for(let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].innerHTML = "";
    }
  }

  append(arg) {
    this.htmlElements.innerHTML += arg;
  }

  attr(arg) {
    this.htmlElements.getAttribute(arg)[0];
  }

  addClass(name) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].className += name;
    }
  }

  removeClass(name) {
    // let classes = [];

    for (let i = 0; i < this.htmlElements.length; i++) {
      let classes = [];
      let hasClasses = this.htmlElements[i].className;
      for (var j = 0; j < hasClasses.length; i++) {
        if (hasClasses[j] !== name) {
          classes.push(hasClasses[j]);
        }
      }

      for(let k = 0; k < classes.length; k++) {
        this.htmlElements[i].addClass(classes[k]);
      }
    }
  }

  children(element) {
    return new DOMNodeCollection(element.children);
  }

  parent(element) {
    return new DOMNodeCollection(element.getElementById(element).parentNode.nodeName);
  }

  find(selector) {
    return new DOMNodeCollection(this.htmlElements.querySelectorAll(selector));
  }

  remove() {
    for(let i = 0; i < this.htmlElements.length; i ++) {
      this.htmlElements[i].innerHTML = "";
      this.htmlElements[i].outerHTML = "";
    }
  }
}

module.exports = DOMNodeCollection;
