const keyboardInput = document.getElementById('egg2');
let word; // Variabel to check length

// Get the modal
var modal = document.getElementById("myEggModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

document.addEventListener('keydown', (event) => {
    console.log(event);
    keyboardInput.value += event.key;
    word = keyboardInput.value;
    console.log(keyboardInput.value);

    if( (word.length === 1 && keyboardInput.value !== '1') || 
        (word.length === 2 && keyboardInput.value !== '13') ||
        (word.length === 3 && keyboardInput.value !== '133') ||
        (word.length === 4 && keyboardInput.value !== '1337')){
        keyboardInput.value = '';
    }
    else if(keyboardInput.value === '1337'){
        
        // Open modal
        modal.style.display = "block";
        
        // Close the modal when clicking on X
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when the user clicks anywhere outside of the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        keyboardInput.value = '';
    }
});

