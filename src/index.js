function main() {
  addEventListener("deviceorientation", onOrientationchange);

  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: "evironment",
      },
    })
    .then(function (signal) {
      const video = document.getElementById("myVideo");
      video.srcObject = signal;
      video.play();
    })
    .catch(function (err) {
      alert(err);
    });
  function onOrientationchange(event) {
    let angle = event.beta - 90;
    if (angle < 0) {
      angle = 0;
    }
    const distObject = document.getElementById("mySlider").value;
    document.getElementById("myLable").innerHTML =
      "Distancia al objeto: " + distObject + " metros";
    const height = Math.tan((angle * Math.PI) / 180) * distObject;
    document.getElementById("heightInfo").innerHTML =
      "Altura del objeto: " +
      height.toFixed(1) +
      " m (" +
      angle.toFixed(1) +
      "&deg;)";
    console.log(angle);
  }
}
main();
