const change1 = () => {
    let a = document.getElementById("colorinput").value;
    document.getElementById("box1").style.background = a;
  };
  const change2 = () => {
    let a = document.getElementById("bcolorinput").value;
    document.getElementById("box1").style.borderColor = a;
  };
  const change3 = () => {
    let a = document.getElementById("bradius").value;
    a = a + "px";
    document.getElementById("box1").style.borderRadius = a;
  };
  const change4 = () => {
    let a = document.getElementById("cwidth").value;
    a = a + "px";
    document.getElementById("box1").style.width = a;
  };
  const change5 = () => {
    a = document.getElementById("cheight").value;
    a = a + "px";
    document.getElementById("box1").style.height = a;
  };
  
  const reset_values = () => {
    document.getElementById("colorinput").value = null;
    document.getElementById("bcolorinput").value = null;
    document.getElementById("bradius").value = null;
    document.getElementById("cwidth").value = null;
    document.getElementById("cheight").value = null;
    document.getElementById("box1").style.borderColor = null;
    document.getElementById("box1").style.background = null;
    document.getElementById("box1").style.borderRadius = 0 + "px";
    document.getElementById("box1").style.height = 100 + "px";
    document.getElementById("box1").style.width = 100 + "px";
  };
  
  const random = () => {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let c = Math.floor(Math.random() * 100);
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    let d = getRandomColor();
    document.getElementById("box1").style.backgroundColor = d;
    document.getElementById("colorinput").value = d;
    let e = getRandomColor();
    document.getElementById("box1").style.borderColor = e;
    document.getElementById("bcolorinput").value = e;
    document.getElementById("box1").style.borderRadius = a + "px";
    document.getElementById("box1").style.height = b + "px";
    document.getElementById("box1").style.width = c + "px";
    document.getElementById("bradius").value = a;
    document.getElementById("cwidth").value = c;
    document.getElementById("cheight").value = b;
  };
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const rand1 = () => {
    let a = getRandomColor();
    document.getElementById("box1").style.backgroundColor = a;
    document.getElementById("colorinput").value = a;
  };
  const rand2 = () => {
    let a = getRandomColor();
    document.getElementById("box1").style.borderColor = a;
    document.getElementById("bcolorinput").value = a;
  };
  
  const rand3 = () => {
    let a = Math.floor(Math.random() * 100);
    document.getElementById("box1").style.borderRadius = a + "px";
    document.getElementById("bradius").value = a;
  };
  const rand4 = () => {
    let a = Math.floor(Math.random() * 100);
    document.getElementById("box1").style.width = a + "px";
    document.getElementById("cwidth").value = a;
  };
  const rand5 = () => {
    let a = Math.floor(Math.random() * 100);
    document.getElementById("box1").style.height = a + "px";
    document.getElementById("cheight").value = a;
  };
  