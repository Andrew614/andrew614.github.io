class EventsHomePage {

    homePageTransition() {
        const home = document.querySelector('.homepage');

        home.addEventListener('click', () => {
            home.classList.add('transition--end');
        });
    }

    homePageRedirect() {
        const home = document.querySelector('.homepage');

        home.addEventListener('click', () => {
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1400)
        })

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 45000);

    }
}

module.exports = EventsHomePage;