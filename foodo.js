
// const elements = document.querySelectorAll('.cta');

// elements.forEach(element => {
//     element.addEventListener('click',(e)=> {
//         alert("hello");
//     });
// });

// $0.addEventListener("click",respondtoclick) ;

//  function respondtoclick (){
//     console.log("i got clicked");
//  }


// add to cart 

var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for (but of button)
{
    but.addEventListener('click',(e)=> {
        var add = Number(noti.getAttribute('data-count')|| 0 );
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
        // copy and paste elements
        
        var parent = e.target.parentnode;
        var clone = parent.clonenode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "buy-now";
        if (clone) {
            noti.onclick =()=> {
                select.classList.target('display');
            }
        }
        // image animation to cart
        
        var image = e.target.parentnode.querySelector('img');
        var span = e.target.parentnode.querySelector('span');
        var s_image = image.clonenode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(()=>{
            span.removeChild(s_image);
            span.classList.remove('active');
        },500);
    })
}

