var Show = {
  Sidebar:function() {
    var computedStyle = window.getComputedStyle(sidebar);
      if (computedStyle.right === '-250px') {
        sidebar.style.right = '0';
      } else {
        sidebar.style.right = '-250px';
      }
  }
}