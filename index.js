window.addEventListener('load',()=>{
    let createbtn = document.querySelector("#create");
    let holder=document.querySelector("#notesholder");
    let newtitleholder=document.querySelector("#newTitle");
    let newdescriptionholder=document.querySelector("#newdescription");
    let savechanges=document.querySelector("#save");

    createbtn.addEventListener("click",function(){
        let cardtitle=document.querySelector("#Title").value;
        if(cardtitle==""){
            window.alert("Title cannot be empty");
            return;
        }
        
        let cardcontent=document.querySelector("#description").value;

        let newdiv=document.createElement("div");
        newdiv.classList.add("container-fluid");
        newdiv.classList.add("d-flex");
        newdiv.style.flexWrap="wrap";

        let cardinp = document.createElement("textarea");
        cardinp.type="text";
        cardinp.classList.add("twoinp");
        cardinp.style.resize="none";
        cardinp.style.display="block";
        cardinp.style.overflow="hidden";
        cardinp.value=cardcontent;
        cardinp.setAttribute("readonly","readonly");
        newdiv.appendChild(cardinp);
        
        document.querySelector("#Title").value="";
        document.querySelector("#description").value="";
        
        let card = document.createElement("div");
        
        card.classList.add("container-fluid");
        card.classList.add("d-flex");
        card.style.flexWrap="wrap";
        card.style.height=`auto`;
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
        delbtn.innerHTML=`<i class="fa fa-thin fa-trash">`

        let anotherdiv = document.createElement("div");
        anotherdiv.classList.add("container-fluid");
        anotherdiv.style.marginLeft="0px";
        anotherdiv.style.marginRight="0px";
        anotherdiv.style.flexWrap="wrap";
        anotherdiv.classList.add("d-flex");
        anotherdiv.style.width="100%";
        anotherdiv.classList.add("topic");

        let titleinp = document.createElement("textarea");
        titleinp.classList.add("topic2");
        titleinp.type="text";
        titleinp.value=cardtitle;
        titleinp.style.display="block";
        titleinp.style.overflow="hidden";
        titleinp.style.resize="none";
        titleinp.style.fontSize="2rem";
        titleinp.style.height="2.8rem";
        titleinp.setAttribute("readonly","readonly");
        anotherdiv.appendChild(titleinp);


        card.appendChild(anotherdiv);
        card.appendChild(newdiv);
        card.appendChild(editbtn);
        card.appendChild(delbtn);
        
        holder.appendChild(card);
        
        delbtn.addEventListener("click",function(){
            holder.removeChild(card);
        });

        editbtn.addEventListener("click",function(){
            if(editbtn.innerHTML==`Edit <i class="fa fa-thin fa-pencil"></i>`){
                titleinp.removeAttribute("readonly");
                cardinp.removeAttribute("readonly");
                editbtn.classList.remove("btn-info");
                editbtn.classList.add("btn-success");
                editbtn.innerHTML=`Save`;

                cardinp.addEventListener('input',autoResize,false);
                titleinp.addEventListener('input',autoResize,false);
                function autoResize() {
                    this.style.height = this.scrollHeight + 'px';
                }
            }
            else{
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


});




