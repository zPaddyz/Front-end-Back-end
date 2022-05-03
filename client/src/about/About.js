import './About.css';

const About = () => {

    return(
        <body class="page_about">
        <header id="background-banner">
            <div class="header-content">
                <div class="header-content-inner">
                    <h1>About Planerino</h1>
                </div>
            </div>
        </header>
        <section>
            <div class="grid">
                <div class="grid-item content-text">
                    <h2>Who er we?</h2>
                    <p>"We are five students from DTU who made this project in the course "front-end devlopment""</p>
                </div>
                <div class="grid-item content-image image-1 hidden-sm hidden-xs"></div>
                <div class="grid-item content-image image-2 hidden-sm hidden-xs"></div>
                <div class="grid-item content-text">
                    <h2>What problem do we solve?</h2>
                    <p>Administrate, get or edit your next event with the help of planeriono.  </p>
                    <p>With planerino we simplify the process of planning your next event so you have everything in one spot. The events can be anything from vaction to festivals.   </p>
                    <p>With Planerino you get features such as inviting all your friends to a specific event to keep up to date with any important announcements. Furthermore you can add pictures of the event so you always have your memories in a specfiic place.
                        add a checklist for everyone to see so no one misses out or forgets to bring something important.
                        lastly you can add your budget. </p>
                </div>
            </div>
        </section>
        </body>
    )
}
export default About