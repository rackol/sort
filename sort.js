var values=[];
var values2=[];
var i=0;
function setup() {
  createCanvas(1000, 1000);
  values= new Array (width);
  values2= new Array (height);
  for(let i=0; i<values.length;i++){
    values[i]=random(height);
  }
  for(let c=0; c<values2.length;c++){
    values2[c]=random(height);
  }
}

function draw() {
  var usersort=document.getElementById("type").value;
  background(150);
  if (usersort=="bubble"){
    var j=0;
    var c=0;
    var d=0;
      if(i<values.length){
        for (let j=0;j<values.length-i-1;j++){
          let a=values[j];
          let b= values[j+1];
          if (a>b){
            swap (values, j, j+1);
          }
        }
      }
      if(c<values2.length){
        for (let d=0;d<values2.length-c-1;d++){
          let e=values[d];
          let f= values[d+1];
          if (e>f){
            swap (values, d, d+1);
          }
        }
      }
      i++;
      c++;
      for (let i=0; i<values.length; i++){
        stroke(225);
        line(width-i,0,i,values[i]);
      }
      for (let c=0; c<values2.length; c++){
        stroke(225);
        line(width-c,height,c,values[c]);
      }
    }
  if (usersort=="selection"){
    if(i<values.length){
      let min=i;
      for(let j=i+1;j<values.length;j++){
        if(values[j]<values[min]){
          min=j;
          var k=j;
        }
      }
      if(min!==i){
        swap(values,i,min);
      }
    }
    i++;
    for (let z=0; z<values.length; z++){
      stroke(225);
      line(z,0,z,values[z]);
    }
  }
}
function swap (arr, a, b){
  let temp=arr[a];
  arr[a]=arr[b];
  arr [b]=temp;
  i=0;
}
