const no_of_pages = 4;
const dataContainer = document.getElementsById("main-container");
const page_numbers = document.getElementById("page-numbers");
const prev_page = document.getElementById("prev");
const next_page =document.getElementById("next");
const page_links = document.querySelectorAll(".page-link");
const cards = 
    Array.from(dataContainer.getElementsByClassName('card')); 
const total_pages=Math.ceil(cards.length/no_of_pages);
let current_page =1;
function arrange_pages(page){
    const start = (page-1) * no_of_pages;
    const end = start + no_of_pages;
    cards.forEach((card,index) => {
        if(index >= start && index < end){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
};
function updatepages(){
    page_numbers.innerText=`Page ${current_page} of ${total_pages}`;
    prev_page.disabled = current_page === 1;
    next_page.disabled = current_page === total_pages;
    page_links.forEach((link) => {
        const page = parseInt(link.getAttribute('data-type'));
        link.classList.toggle("active",page === current_page);
    });
};
prev_page.addEventListener('click' , () => {
    if(current_page > 1){
        current_page--;
        arrange_pages(current_page);
        updatepages();
    }
});
next_page.addEventListener('click',() => {
    if(current_page < total_pages){
        current_page++;
        arrange_pages(current_page);
        updatepages();
    }
});
page_links.forEach((link) => {
    link.addEventListener('click',(ele) => {
        ele.preventDefault();
        const page =parseInt(link.getAttribute('data-type'));
        if(page != current_page){
            current_page = page;
            arrange_pages(current_page);
            updatepages();
        }
    });
});
arrange_pages(current_page);
updatepages();

