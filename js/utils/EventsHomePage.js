class EventsHomePage {

    homePageRedirect() {
        const home = document.querySelector('.homepage');

        home.addEventListener('click', () => {
            window.location.href = 'index.html';
        })

    }
}

module.exports = EventsHomePage;