var SVGIcons = {
    "nikeLogo": {
        draw: function(ctx, color) {
            ctx.save();
            ctx.strokeStyle = "rgba(0,0,0,0)";
            ctx.miterLimit = 4;
            ctx.font = "15px ''";
            ctx.scale(0.06666666666666667, 0.06666666666666667);
            ctx.scale(1.3333333333333333, 1.3333333333333333);
            ctx.save();
            ctx.strokeStyle = "rgba(0,0,0,0)";
            ctx.translate(0, 840);
            ctx.scale(0.1, -0.1);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(2319, 5143);
            ctx.bezierCurveTo(1899, 4672, 1706, 4351, 1644, 4022);
            ctx.bezierCurveTo(1623, 3911, 1629, 3730, 1656, 3650);
            ctx.bezierCurveTo(1699, 3521, 1825, 3382, 1955, 3320);
            ctx.bezierCurveTo(2183, 3211, 2523, 3231, 2944, 3377);
            ctx.bezierCurveTo(3016, 3402, 3307, 3522, 3590, 3642);
            ctx.bezierCurveTo(4074, 3849, 4426, 3999, 5860, 4612);
            ctx.bezierCurveTo(6182, 4750, 6645, 4948, 6890, 5052);
            ctx.bezierCurveTo(7135, 5156, 7337, 5244, 7339, 5246);
            ctx.bezierCurveTo(7354, 5261, 7308, 5251, 7100, 5195);
            ctx.bezierCurveTo(6971, 5160, 6658, 5077, 6405, 5010);
            ctx.bezierCurveTo(6152, 4943, 5779, 4844, 5575, 4790);
            ctx.bezierCurveTo(3365, 4203, 3139, 4143, 3055, 4128);
            ctx.bezierCurveTo(3017, 4121, 2913, 4115, 2825, 4115);
            ctx.bezierCurveTo(2688, 4115, 2655, 4118, 2595, 4137);
            ctx.bezierCurveTo(2451, 4182, 2339, 4284, 2284, 4420);
            ctx.bezierCurveTo(2231, 4548, 2241, 4756, 2307, 4950);
            ctx.bezierCurveTo(2336, 5034, 2405, 5184, 2445, 5248);
            ctx.bezierCurveTo(2493, 5326, 2452, 5291, 2319, 5143);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
        }
    }
};

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var colorPicker = document.getElementById('color-picker');

    // Initial color is black
    var currentColor = "#000000";  
    colorPicker.value = "#000000"; 

    function drawLogo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        var image = SVGIcons["nikeLogo"];
        if (image && image.draw) {
            image.draw(ctx, currentColor);  
        }
    }
    drawLogo();

    colorPicker.addEventListener('input', function() {
        currentColor = colorPicker.value; 
        drawLogo();
    });
};

// sledi velikostim
let selectedSize = null;

// vse vilkosti
const sizeButtons = document.querySelectorAll('.sizes button');

// ce kliknes dogodki na gumbih
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.style.border === '2px solid black') { // select pa deselect
            button.style.border = '1px solid #ddd';
        } else {
            sizeButtons.forEach(btn => btn.style.border = '1px solid #ddd');
            button.style.border = '2px solid black';
            selectedSize = button.textContent; // Store the selected size
        }
    });
});


const addToBagButton = document.querySelector('.add-to-bag');


addToBagButton.addEventListener('click', () => {
    if (!selectedSize) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please pick a size first.',
            icon: 'warning',
            confirmButtonText: 'OK',
            customClass: {
                title: 'my-title',
                htmlContainer: 'my-text',
                confirmButton: 'my-confirm-button'
            }
        })
    } else {
        Swal.fire({
            title: 'Success!',
            text: `The item with size ${selectedSize} has been added to your bag.`,
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                title: 'my-title',
                htmlContainer: 'my-text',
                confirmButton: 'my-confirm-button'
            }
        })
    }
});


const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail-gallery img');

//fade-in fade-out efeckt
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.classList.add('fade-out');

        setTimeout(() => {
            mainImage.src = thumbnail.src;
            mainImage.classList.add('fade-in');
        }, 300);

        setTimeout(() => {
            mainImage.classList.remove('fade-out', 'fade-in');
        }, 600);
    });
});

const magnifyContainer = document.querySelector('.magnify-container');
const mainImg = document.querySelector('.main-image');

magnifyContainer.addEventListener('mousemove', (event) => {
    const rect = magnifyContainer.getBoundingClientRect();
    const x = event.clientX - rect.left; // x pozicvija
    const y = event.clientY - rect.top; // y pozicija
    const xPercent = (x / rect.width) * 100; // v procentih
    const yPercent = (y / rect.height) * 100; // v procentih
    mainImg.style.transformOrigin = `${xPercent}% ${yPercent}%`; // zoomiras v sliko 
});