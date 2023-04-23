let body = document.querySelector('body');

let title = document.createElement('h1');
  title.setAttribute('id','title');
  title.innerText = 'Calculator using DOM';


  let p = document.createElement('p');
  p.setAttribute("id","description");
  body.append(p);
  p.append(title);
  
  let div = document.createElement('div');
  div.classList.add('container');
  div.setAttribute("id","title");
  body.append(div);

  let div1 = document.createElement('div');
  div1.classList.add('calculator');
  div.append(div1);

  let input = document.createElement('input');
  input.classList.add('data');
  input.setAttribute("placeholder","0");
  input.setAttribute('id','result');
  div1.append(input);

  let arr = ['Cl',"DEL","%","*",'7',"8","9","/","4","5","6","-","1","2","3","+",".","0","="]
  let arr1 =['clear','DEL','mod','mul','7',"8","9","division","4","5","6","subtract","1","2","3","add",".","0","equal"]

  for(let i=0; i<arr.length; i++){
    let button = document.createElement('button')
    button.setAttribute('id',arr1[i])
    button.setAttribute('onclick','btn(this)')
    button.innerText = arr[i];
    div1.append(button);
  }

  function btn(e) {
    try{
    let data = document.querySelector("[placeholder]");
    
    if(e.id == "clear"){
      data.value = "";
    } else if(e.id == "equal"){
          data.value = eval(data.value);
        if(data.value == "undefined")
        {
          data.value ="";
        }
    } else if(e.id == "DEL"){
      data.value = data.value.slice(0,-1);
    } else {
    data.value += e.innerText;
    console.log(data);
    console.log('e',e.id);
    }
  }catch(err){
    console.log(err);
    alert("Invalid Input");
  }
  }

  window.addEventListener('keydown',(e)=>{
 
    let data = document.querySelector('[placeholder]');
    console.log(e);
  
  if(e.code.includes('Digit')) {
    data.value += e.key
    console.log(e);
  }// else{
  //   alert('Only numbers are allowed');
  // }
  })
