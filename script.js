function openNav() {
    document.getElementById("mySidenav").classList.add('open');
    document.querySelector(".navbar").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").classList.remove('open');
    document.querySelector(".navbar").style.display = "block";
  }