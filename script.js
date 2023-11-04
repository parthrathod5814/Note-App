const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

addbtn.addEventListener(

    "click",function(){

        addnote()
     
    }
) 

const savenote =()=>{

    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data =[];

    notes.forEach(
        (note)=>{
            data.push(note.value)
                }
    )

    //console.log(data);
if(data.length === 0){
    localStorage.removeItem("notes")
}

else{
    localStorage.setItem("notes",JSON.stringify(data))
}

}

{/* <div class="note">
<div class="tool-bar">
    <textarea class="title-text" placeholder="Title"></textarea>
    <i class="fa-solid fa-floppy-disk" style="padding: 5px;  cursor: pointer;"></i>
    <i class="fa-solid fa-trash-can"  style="padding: 5px; cursor: pointer;"></i>
</div>

<div>
    <textarea class="main-text"></textarea>
</div>
</div> */}

    
 

const addnote =(text="") =>{

    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool-bar">
    <img src="Icons/Save-PNG.png" class="save">
    <img src="Icons/Delete-PNG.png" class="delete">
</div>

<div>
    <textarea class="main-text" placeholder="Add Your Note...">${text}</textarea>
</div>
    `; 

    note.querySelector(".delete").addEventListener(

        "click",function(){

            alert("Are You Want To Delete");
            note.remove()
            savenote()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",function(){

            savenote()
        }
    )
    
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            savenote()
        }
    )
    
     main.appendChild(note);


}



(
    function(){

        const lsnotes=JSON.parse(localStorage.getItem("notes"));
       

        if(lsnotes.length === null){

           addnote()
        }
        else{
            lsnotes.forEach(
                (lsNote)=>{
                    addnote(lsNote)
                }
            )
        }
    }
)()
