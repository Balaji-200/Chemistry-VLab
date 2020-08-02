const level01Options = [
    'Solid waste including plastics, metal, wood etc',
    'Microbial waste',
    'Soaps and Detergents',
    'Sewage',
    'Oil spills',
    'Bio-Medical waste',
    'Nuclear waste',
    'Chemicals including acids, drugs, dyes paints etc.',
    'Storm generated waste',
    'Organic waste including food, plant waste etc.',
];
var durationRight=0.7; 
var durationLeft = 0.7;
//#######################################################################################//
function Level01(){
    const options = document.getElementById('options');
    const drop1 = document.getElementById('drop1');
    const drop4 = document.getElementById('drop4');
    drop1.style.animationDuration = '0.8s'
    drop4.style.animationDuration = '0.8s'
    level01Options.map((option,index)=>{
        options.appendChild(createOption(option,index+1));
    })

}

function createOption(option,id){
    const div = document.createElement('div');
    div.classList.add('option','font-weight-light', 'm-1' ,'justify-content-center','text-center','p-1', 'bg-purple','align-items-center','d-flex');
    div.innerText = option;
    div.setAttribute('id',`drag${id}`);
    div.setAttribute('draggable','true');
    div.setAttribute('ondragstart','drag(event)');
    if(id%2==0){
        div.classList.add('slideRight');
        div.style.animationDuration = `${(durationLeft+=0.1)}s`;
    }else{
        div.classList.add('slideRight');
        div.style.animationDuration = `${(durationRight+=0.1)}s`;
    }
    return div;
}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(ev.target.id).innerText = document.getElementById(data).innerText;
  }

  function checkLevel01() {
    for(let i = 1 ; i<=4; i++){
        const drop = document.getElementById(`drop${i}`);
        console.log(drop.innerText);
        for(let j=1;j<=4;j++){
            if(j===i)
                continue
            const nextDrop = document.getElementById(`drop${j}`);
            if(drop.innerText == nextDrop.innerText){
                alert('No two Drop boxes can have same options');
                return false;
            }
        }
    }
    return true;
}

//#######################################################################################//


function level02(){
    var clicks = 0;
    const options = document.getElementById('Options-02');
    for(let i=0; i<=3 ; i++){
        console.log(options.children[i]);
        options.children[i].addEventListener('click',()=>{
            if(clicks<2)
            if(!options.children[i].classList.contains('option-clicked'))
                options.children[i].classList.add('option-clicked');
                clicks++;
        })
    }
}

function checkLevel02(){
    const options = document.getElementById('Options-02');
    for(let i=0; i<=3 ; i++){
            if(options.children[i].classList.contains('option-clicked'))
            if(options.children[i].id == 'wrong'){
                alert('Wrong Answer');
                location.href = './landing-page.html'
            }
    }
    return true;
}

//#######################################################################################//

function level03(){
    var clicked = false;
    const options = document.getElementById('Options-03');
    for(let i=0; i<=1 ; i++){
        console.log(options.children[i]);
        options.children[i].addEventListener('click',()=>{
            if(clicked==false)
                if(!options.children[i].classList.contains('option-clicked')){
                    options.children[i].classList.add('option-clicked');
                    clicked = true;
                }
            })
    }
}

function checkLevel03(){
    const options = document.getElementById('Options-03');
    for(let i=0; i<=1 ; i++){
                if(options.children[i].classList.contains('option-clicked')){
                    if(options.children[i].id == 'correct')
                    return true;
                    else{
                        alert('Wrong Answer');
                        location.href = './landing-page.html'
                    }
                }
    }
}