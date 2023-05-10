const icons = document.querySelectorAll('.icon');
const icon_strings = ["EMOTE%20V5%20112X112.png", "EMOTE%20V2%20112X112.png", "EMOTE%20V1%20112X112.png"];
let i = 2;
let j = 2;

icons.forEach((icon) => {
	icon.addEventListener('animationend', () => {
        
		setTimeout(() => {
			icon.style.animation = 'go-up 2s linear forwards'; // Animation to move from middle to top
		}, 15000); // Wait for 15 seconds before moving up again

		setTimeout(() => {
            if(icon.id === "icon1")
            {
                i = (i + 1) % icon_strings.length;        
                icon.src = icon_strings[i];
            }
            if(icon.id === "icon2")
            {
                j = (j + 1) % icon_strings.length;
                icon.src = icon_strings[j];
            } 
			icon.style.animation = 'move-up 2s ease-in-out, wiggle 3s ease-in-out infinite'; // Animation to move from bottom to middle and wiggle
		}, 17000); // Wait for 17 seconds before starting the animation again
         
    });
    
    icon.src = icon_strings[i];
	icon.style.animation = 'move-up 2s ease-in-out, wiggle 3s ease-in-out infinite'; // Initial animation to move from bottom to middle and wiggle
});

