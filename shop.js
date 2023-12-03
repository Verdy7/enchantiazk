document.addEventListener("DOMContentLoaded", function() {
    const customMessage = document.querySelector(".custom-message");
    
    setTimeout(function() {
        customMessage.style.opacity = "1";
        customMessage.style.transform = "translateY(0)";
        
       
        setTimeout(function() {
            customMessage.style.opacity = "0";
            customMessage.style.transform = "translateY(20px)";
            customMessage.style.zIndex = "0";
        }, 10000); 
    }, 100);
});