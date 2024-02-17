document.getElementById('sidebar-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var computedStyle = window.getComputedStyle(sidebar);
    if (computedStyle.left === '-250px') {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-250px';
    }
  });