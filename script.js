let body = document.querySelector('body');
  
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
  div1.append(input);

  let arr = ['Cl',"DEL","%","*",'7',"8","9","/","4","5","6","-","1","2","3","+",".","0","="]

  for(let i=0; i<arr.length; i++){
    let button = document.createElement('button')
    button.setAttribute('id',arr[i])
    button.setAttribute('onclick','btn(this)')
    button.innerText = arr[i];
    div1.append(button);
  }

  function btn(e) {
    try{
    let data = document.querySelector("[placeholder");
    
    if(e.id == "Cl"){
      data.value = "";
    } else if(e.id == "="){
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
  }else{
    alert('Only numbers are allowed');
  }
  })
