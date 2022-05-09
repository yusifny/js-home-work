var tabHeads = document.querySelectorAll(".contanier .tab-heads button");
var tabContents = document.querySelectorAll(".contanier .tab-content");

function activeContent(tabIndex, tabColor){
    tabHeads.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabHeads[tabIndex].style.backgroundColor=tabColor;
    tabHeads[tabIndex].style.color = "grey";
    
    tabContents.forEach(function(node){
        node.style.display = "none";
    });
    tabContents[tabIndex].style.display = "block";
    tabContents[tabIndex].style.backgroundColor = tabColor;
}