// window.onload
function addLoadEvent(func) {
  var oldonload = window.onload;
  if(typeof window.onload != 'function') {
    window.onload = func;
  }else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// insertAfter
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

// nextElementSibling
function getNextElement(node) {
  if(node.nodeType == 1) {
      return node;
  }
  if(node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

// addClass
function addClassName(elem, addClass) {
  if(!elem.className) {
    elem.className = addClass;
  }else {
    var newClassName = elem.className;
    newClassName += " ";
    newClassName += addClass;
  }
}

// 检查浏览器是否支持某种类型的输入控件
function inputSupportsType(type) {
  if(!document.createElement) return false;
  var input = document.createElement("input");
  input.setAttribute("type", type);
  if(input.type == 'text' && type != 'text') {
    return false;
  }else {
    return true;
  }
}
// For Example
if(!inputSupportsType('date')) {
  // do something
}

// 检查某元素特定的属性
function elemSupportsAttribute(elemName, attribute) {
  if(!document.createElement) return false;
  var temp = document.createElement(elemName);
  return (attribute in temp);
}
// For Example
if(!elemSupportsAttribute('input', 'placeholder')) {
  // do something
}
