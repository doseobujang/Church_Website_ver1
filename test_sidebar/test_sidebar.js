var Show = {
  Sidebar:function() {
    var computedStyle = window.getComputedStyle(sidebar);
      if (computedStyle.right === '-250px') {
        sidebar.style.right = '0';
      } else {
        sidebar.style.right = '-250px';
      }
    this.Opaquely();
  },

  Opaquely:function() {
    var opacityStyle = document.querySelector('#sideIsOpen').style;
    if(opacityStyle.display === 'none') {
      opacityStyle.display = 'flex';
    }
    else {
      opacityStyle.display = 'none';
    }
  }
}