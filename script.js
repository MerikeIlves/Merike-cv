const pildid = [
  "pildid/pilt1.jpg",
  "pildid/pilt2.jpg",
  "pildid/pilt3.jpg"
];

let praegunePilt = 0;

const pildiElement = document.getElementById("karuselli-pilt");

pildiElement.addEventListener("click", function () {
  praegunePilt = (praegunePilt + 1) % pildid.length;

  pildiElement.src = pildid[praegunePilt];
});