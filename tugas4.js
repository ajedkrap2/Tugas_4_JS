var ari = 168, dhani = 176, andra = 172;

function tugas4(x,y,z){
  var a = "Ari", b = "Dhani",c = "Andra";

  if (x < y) {
    if (y < z){
      console.log(c, b, a);
    }
    else if (z < y) {
      console.log(b, c, a);
    }
  }
  else if (y < x) {
    if (x < z){
      console.log(c, a, b);
    }
    else if (z < x) {
      console.log(a, c, b);
    }
  }
  else if (z < x) {
    if (x < y) {
      console.log(b, a, c)
    }
    else if (y < x) {
      console.log(a, b, c)
    }
  }
  /*
  if (x < y && y < z) {
    console.log(c, b, a)
  }
  else if (x < y && z < y) {
    console.log(b, c, a)
  }
  else if (y < x && x < z) {
    console.log(c, a, b)
  }
  else if (y < x && z < x) {
    console.log(a, c, b)
  }
  else if (z < x && x < y) {
    console.log(b, a, c)
  }
  else {
    console.log(a, b, c);
  }
  */
}

tugas4(ari,dhani,andra);
