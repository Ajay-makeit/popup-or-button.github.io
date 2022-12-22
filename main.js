const creator_btn = document.getElementById("creator_btn");
const del_all_clutter = document.getElementById("clear_clutter_btn");

const mediabreakpoint = 600;
const clicks = 0;
console.log(creator_btn);

function randomposition() {
    return Math.floor(Math.random() * 1000);
}

function randompositionsmall(){
    return Math.floor(Math.random() * 500);
    
}

creator_btn.addEventListener('click', () =>{
    console.log("i clicked the button");

// creating new popup box and close button
    const popup = document.createElement('div');
    const content = document.createTextNode('Why are you cliking this');
    const close_btn = document.createElement('btn');
    const close_btn_content = document.createTextNode('X');

    popup.setAttribute('id', 'popup_box');
    close_btn.setAttribute('id', 'popup_close_btn')
    popup.appendChild(content, close_btn);
    close_btn.appendChild(close_btn_content);
    popup.appendChild(close_btn);
    
    popup.style.position = "sticky";
// customizing the posotion of boxes for even distribution on mobile aswell as desktop
    if (document.documentElement.clientWidth < mediabreakpoint  ) {
    popup.style.left = randompositionsmall() +'px';
    popup.style.right = randomposition()+ randomposition() + 'px';
    popup.style.bottom = randompositionsmall() + 'px';
    }
    else{
        popup.style.left = randomposition()+ randompositionsmall() +'px';
        popup.style.right = randomposition()+ randompositionsmall() + 'px';
      popup.style.bottom = randompositionsmall() + 'px';

    }
    document.body.appendChild(popup);

// below code creates another button when the close button of popup box is clicked
    close_btn.addEventListener('click', () =>{
        const newbtn = document.createElement('button');
        const newbtn_conent = document.createTextNode('ahh you clicked this!');
        newbtn.appendChild(newbtn_conent);
        newbtn.setAttribute('id','new_create_btn' );
        newbtn.style.position = "sticky";
        newbtn.style.left = randomposition()+'px';
        newbtn.style.right = randomposition()+ randompositionsmall() + 'px';
        newbtn.style.bottom = randomposition() + 'px';
        document.body.appendChild(newbtn);
// clearing all the elements of the screen
        del_all_clutter.addEventListener("click", ()=> {
            popup.remove();
            newbtn.remove();
            })

        console.log("popup close is working");
    });

    del_all_clutter.addEventListener("click", ()=> {
    popup.remove();
    });
});

