class Events {
    toggleTheme() {
        const body = document.body
        const themeButton = document.querySelector('.theme-button');
        const images = document.querySelectorAll('.contact-section__list-item');
        const links = document.querySelectorAll('a');

        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            // for (i = 0; i < images.length; i++) {
            //     images[i].classList.toggle('dark');
            // }
            images.forEach((img) => {
                img.classList.toggle('dark-img');
            });
            links.forEach((link) => {
                link.classList.toggle('dark-link');
            });
            if (themeButton.textContent === 'Light mode') {
                themeButton.textContent = 'Dark mode';
            } else {
                themeButton.textContent = 'Light mode';
            };
        });
    }

    hoverThemeButtom() {
        const themeButton = document.querySelector('.theme-button');

        themeButton.addEventListener('mouseenter', () => {
            themeButton.classList.add('theme-button--hover');

        });

        themeButton.addEventListener('mouseout', () => {
            themeButton.classList.remove('theme-button--hover');

        });
    }

}

module.exports = Events;