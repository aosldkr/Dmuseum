$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div',head);
$('footer').load('./inc.html footer>div');


let idx = localStorage.idx;

function head(){
    


    $('header div.under-menu ul li').click(function(e){
        e.preventDefault(); //웹페이지 이동 못하게 하는것
        let idx = $(this).index();
        localStorage.idx = idx;

        $('header div.under-menu ul li > a').removeClass('on');
        $('header div.under-menu ul li > a').eq(idx).addClass('on');
              
    })

     
    window.onload = function () {
        const elHeader = document.querySelector('header');
        const elHeaderWeb = document.querySelector('.header-web');
        const elMainMenu = document.querySelector('.main-menu');
        const elUnderMenu = document.querySelector('.under-menu ul');
        const elLogo = document.querySelector('div.main-menu h1 a');
        const elMenuText = document.querySelector('div.under-menu ul');
        const elSideIcon = document.querySelector('div.side-icon ul');
        const elSearch = document.querySelector('div.side-icon ul > li.search');
        const elSearchB = document.querySelector('div.side-icon ul > li.all-menu');
    
        let offset = [],
                play,
                pos = { y: 0, y2: 0, state: true },
                idx = 0;
          
            window.addEventListener('scroll',function(){
                
                pos.y = window.pageYOffset;
                pos.state = (pos.y > pos.y2) ? true : false;
                pos.y2 = pos.y;
                         
                if(pos.y>0){
                    elHeader.classList.add('active');                
      
                }else{
                    elHeader.classList.remove('active');
           
                  
                }
                elHeader.classList.remove('menubtn')
            })
            const elUnderMenuText = document.querySelectorAll('.under-menu ul li > a');
            elSearch.onclick =function(){
                event.preventDefault();
                
              
                 elHeader.classList.toggle('menubtn');
                 
            
            }
    }      
}