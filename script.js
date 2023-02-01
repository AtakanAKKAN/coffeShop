$(document).click(function(e) {
   e.preventDefault();
 });

 window.sr = ScrollReveal();

 sr.reveal(".ani-left",{
      origin:'left',
      duration:1750,
      distance: '8rem',
      delay:600,
      

 });

 sr.reveal(".ani-right",{
  origin:'right',
  duration:1750,
  distance: '2%',
  delay:600,
 
});

sr.reveal(".ani-top",{
  origin:'top',
  duration:1500,
  distance: '8rem',
  delay:500,

});

sr.reveal(".ani-bottom",{
  origin:'bottom',
  duration:1500,
  distance: '8rem',
  delay:500,

});