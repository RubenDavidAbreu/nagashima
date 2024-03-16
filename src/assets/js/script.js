function toggleClasses(id, class1, class2){
    var element = document.getElementById(id);
    element.classList.toggle(class2);
    element.classList.toggle(class1);
}

function showOnly(className) {
    parent = document.getElementById('boxesContainer');
    className = ' ' + className + ' ';
  
    var e = parent.firstChild;
    while (e != null) {
      if (e.nodeType == 1) {
        if ((' ' + e.className + ' ').indexOf(className) > -1)
          e.style.display = 'block';
        else
          e.style.display = 'none';
      }
  
      e = e.nextSibling;
    }
  }