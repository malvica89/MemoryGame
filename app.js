var openedCards = [];
var matches = 0;
var cards = document.querySelectorAll(".cards");

function swapImages()  
{
    openedCards.push(this);
    if(openedCards.length === 2)
    {
        
        if(openedCards[0].src == this.src)
        {
            matches +=1;
           document.getElementById('matches').innerHTML = matches;
           openedCards = [];
        }
        else
        {
         unmatched();    
        }
       
    }
}


function unmatched()
{
    setTimeout(function(){
        openedCards.forEach(element => {element.src = "images/green.png"});
        openedCards = [];

    }, 500);
}

function displayImages()
{
    let image = "";
    switch(this.id)
    {
        case 'elephant':
            image = "images/elephant.jpg";
            break;
        case 'tiger':
            image = "images/tiger.png" ;
            break;
        case 'rabbit':
            image = "images/rabbit.png" ;
            break;     

    }
    this.src = image;
}

cards.forEach(element => {element.addEventListener('click', displayImages);
element.addEventListener('click', swapImages)
    
});


