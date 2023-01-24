const titletxtarea = document.querySelector("#Title");
titletxtarea.addEventListener("keydown",e=>{
    titletxtarea.style.height='40px';
    let scrheight = e.target.scrollHeight;
    titletxtarea.style.height=`${scrheight}px`;
});

const contenttxtarea = document.querySelector("#description");
contenttxtarea.addEventListener("keydown",e=>{
    contenttxtarea.style.height='150px';
    let ht = e.target.scrollHeight;
    contenttxtarea.style.height=`${ht}px`;
});

window.addEventListener('load',()=>{
    let createbtn = document.querySelector("#create");
    let holder=document.querySelector("#notesholder");

    for(var a in localStorage){
        if((a=='length') ||(a=='clear' && localStorage[a]=='function clear() { [native code] }') || (a=='getItem' && localStorage[a]=='function getItem() { [native code] }') ||(a=='key' && localStorage[a]=='function key() { [native code] }') || (a=='removeItem' && localStorage[a]=='function removeItem() { [native code] }') || (a=='setItem' && localStorage[a]=='function setItem() { [native code] }')){
            continue;
        }
        let cardtitle=a;
        let cardcontent=localStorage[a];
        let newdiv=document.createElement("div");
        newdiv.classList.add("container-fluid");

        let cardinp = document.createElement("textarea");
        cardinp.type="text";
        cardinp.style.width="100%";
        cardinp.classList.add("twoinp");
        cardinp.setAttribute("readonly","readonly");
        newdiv.appendChild(cardinp);
        
        document.querySelector("#Title").value="";
        document.querySelector("#description").value="";
        
        let card = document.createElement("div");
        
        card.classList.add("container-fluid");
        card.style.width=`100%`;
        card.classList.add('newcard');
  
        let editbtn = document.createElement("button");
        editbtn.classList.add("btn");
        editbtn.classList.add("btn-block");
        editbtn.classList.add("btn-info");
        editbtn.classList.add("editbtn");
        editbtn.innerHTML = `Edit <i class="fa fa-thin fa-pencil"></i>`;

        let delbtn = document.createElement("button");
        delbtn.classList.add("btn");
        delbtn.classList.add("btn-block");
        delbtn.style.float="right";
        delbtn.classList.add("btn-danger");
        delbtn.classList.add("delbtn");
        delbtn.innerHTML=`<i class="fa fa-thin fa-trash">`;

        let btndiv = document.createElement("div");
        btndiv.classList.add("container-fluid");
        btndiv.style.paddingRight="0px";
        btndiv.appendChild(delbtn);
        btndiv.appendChild(editbtn);

        let anotherdiv = document.createElement("div");
        anotherdiv.classList.add("container-fluid");
        anotherdiv.style.marginLeft="0px";
        anotherdiv.style.marginRight="0px";
        anotherdiv.style.width="100%";
        anotherdiv.classList.add("topic");

        let titleinp = document.createElement("textarea");
        titleinp.classList.add("topic2");
        titleinp.type="text";
        titleinp.style.fontSize="2rem";
        titleinp.style.height="2.8rem";
        titleinp.setAttribute("readonly","readonly");
        anotherdiv.appendChild(titleinp);

        card.appendChild(anotherdiv);
        card.appendChild(newdiv);
        card.appendChild(btndiv);
        
        holder.appendChild(card);
        localStorage.setItem(`${cardtitle}`,`${cardcontent}`);
        titleinp.value=cardtitle;
        titleinp.style.height = '40px';
        titleinp.style.height = titleinp.scrollHeight+'px';
        
        cardinp.value=cardcontent;
        cardinp.style.height = '20px';
        cardinp.style.height = cardinp.scrollHeight+'px';
        
        delbtn.addEventListener("click",function(){
            holder.removeChild(card);
            localStorage.removeItem(`${cardtitle}`);
        });

        editbtn.addEventListener("click",function(){
            if(editbtn.innerHTML==`Edit <i class="fa fa-thin fa-pencil"></i>`){
                localStorage.removeItem(`${titleinp.value}`);
                titleinp.removeAttribute("readonly");
                cardinp.removeAttribute("readonly");
                editbtn.classList.remove("btn-info");
                editbtn.classList.add("btn-success");
                editbtn.innerHTML=`Save`;

                titleinp.addEventListener("keydown",e=>{
                    titleinp.style.height='40px';
                    let height1 = e.target.scrollHeight;
                    console.log(height1);
                    titleinp.style.height=`${height1}px`;
                });

                cardinp.addEventListener("keydown",e=>{
                    cardinp.style.height='10px';
                    let height2= e.target.scrollHeight;
                    console.log(height2);
                    cardinp.style.height=`${height2}px`;
                });
            }
            else{
                localStorage.setItem(`${titleinp.value}`,`${cardinp.value}`);
                if(titleinp.value==""){
                    window.alert("Title cannot be empty");
                    return;
                }
                titleinp.setAttribute("readonly","readonly");
                cardinp.setAttribute("readonly","readonly");
                editbtn.classList.remove("btn-success");
                editbtn.classList.add("btn-info");
                editbtn.innerHTML=`Edit <i class="fa fa-thin fa-pencil"></i>`;
            }
        });
    }

    createbtn.addEventListener("click",function(){
        document.querySelector("#Title").style.height="40px";
        document.querySelector("#description").style.height="150px";
        let cardtitle=document.querySelector("#Title").value;
        if(cardtitle==""){
            window.alert("Title cannot be empty");
            return;
        }
        
        let cardcontent=document.querySelector("#description").value;

        let newdiv=document.createElement("div");
        newdiv.classList.add("container-fluid");

        let cardinp = document.createElement("textarea");
        cardinp.type="text";
        cardinp.style.width="100%";
        cardinp.classList.add("twoinp");
        cardinp.setAttribute("readonly","readonly");
        newdiv.appendChild(cardinp);
        
        document.querySelector("#Title").value="";
        document.querySelector("#description").value="";
        
        let card = document.createElement("div");
        
        card.classList.add("container-fluid");
        card.style.width=`100%`;
        card.classList.add('newcard');
        
        let editbtn = document.createElement("button");
        editbtn.classList.add("btn");
        editbtn.classList.add("btn-block");
        editbtn.classList.add("btn-info");
        editbtn.classList.add("editbtn");
        editbtn.innerHTML = `Edit <i class="fa fa-thin fa-pencil"></i>`;

        let delbtn = document.createElement("button");
        delbtn.classList.add("btn");
        delbtn.classList.add("btn-block");
        delbtn.style.float="right";
        delbtn.classList.add("btn-danger");
        delbtn.classList.add("delbtn");
        delbtn.innerHTML=`<i class="fa fa-thin fa-trash">`;

        let btndiv = document.createElement("div");
        btndiv.classList.add("container-fluid");
        btndiv.style.paddingRight="0px";
        btndiv.appendChild(delbtn);
        btndiv.appendChild(editbtn);

        let anotherdiv = document.createElement("div");
        anotherdiv.classList.add("container-fluid");
        anotherdiv.style.marginLeft="0px";
        anotherdiv.style.marginRight="0px";
        anotherdiv.style.width="100%";
        anotherdiv.classList.add("topic");

        let titleinp = document.createElement("textarea");
        titleinp.classList.add("topic2");
        titleinp.type="text";
        titleinp.style.fontSize="2rem";
        titleinp.style.height="2.8rem";
        titleinp.setAttribute("readonly","readonly");
        anotherdiv.appendChild(titleinp);


        card.appendChild(anotherdiv);
        card.appendChild(newdiv);
        card.appendChild(btndiv);
        
        holder.appendChild(card);
        localStorage.setItem(`${cardtitle}`,`${cardcontent}`);
        titleinp.value=cardtitle;
        titleinp.style.height = '40px';
        titleinp.style.height = titleinp.scrollHeight+'px';
        
        cardinp.value=cardcontent;
        cardinp.style.height = '20px';
        cardinp.style.height = cardinp.scrollHeight+'px';
        
        delbtn.addEventListener("click",function(){
            holder.removeChild(card);
            localStorage.removeItem(`${titleinp.value}`);
        });

        editbtn.addEventListener("click",function(){
            if(editbtn.innerHTML==`Edit <i class="fa fa-thin fa-pencil"></i>`){
                console.log("editing mein ghusa");
                localStorage.removeItem(`${titleinp.value}`);
                titleinp.removeAttribute("readonly");
                cardinp.removeAttribute("readonly");
                editbtn.classList.remove("btn-info");
                editbtn.classList.add("btn-success");
                editbtn.innerHTML=`Save`;

                titleinp.addEventListener("keydown",e=>{
                    titleinp.style.height='40px';
                    let height1 = e.target.scrollHeight;
                    console.log(height1);
                    titleinp.style.height=`${height1}px`;
                });

                cardinp.addEventListener("keydown",e=>{
                    cardinp.style.height='10px';
                    let height2= e.target.scrollHeight;
                    console.log(height2);
                    cardinp.style.height=`${height2}px`;
                });
            }
            else{
                localStorage.setItem(`${titleinp.value}`,`${cardinp.value}`);
                if(titleinp.value==""){
                    window.alert("Title cannot be empty");
                    return;
                }
                titleinp.setAttribute("readonly","readonly");
                cardinp.setAttribute("readonly","readonly");
                editbtn.classList.remove("btn-success");
                editbtn.classList.add("btn-info");
                editbtn.innerHTML=`Edit <i class="fa fa-thin fa-pencil"></i>`;
            }
        });
    });
    document.querySelector("#close").addEventListener("click",function(){
        let titlerholder=document.querySelector("#Title");
        let desholder=document.querySelector("#description");
        titlerholder.value="";
        desholder.value="";
        titlerholder.style.height="40px";
        desholder.style.height="150px";
    });
    document.querySelector("#close2").addEventListener("click",function(){
        let titlerholder=document.querySelector("#Title");
        let desholder=document.querySelector("#description");
        titlerholder.value="";
        desholder.value="";
        titlerholder.style.height="40px";
        desholder.style.height="150px";
    });
});
