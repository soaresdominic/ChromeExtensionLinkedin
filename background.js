

setInterval(remove, 1000);

function remove(){
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Yeah!");
    } else {
        // jQuery is not loaded
        console.log("Doesn't Work");
    }

    $('li:contains("Promoted")').remove();
}

