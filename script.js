function toggleMenu() {
    const navList = document.querySelector('nav');
    if (navList.style.display === 'block') {
        navList.style.display = ''; /* Reset to CSS default */
    } else {
        navList.style.display = 'block';
    }
}

function doHeader(ActiveItem) {
    const header = document.querySelector('header');
    const headerHTML = `
        <div class="container-navbar">
            <div class="logo">
                <a href="index.html">E.R.I. Krueger</a>
            </div>
            <div class="container-navbar-toggle">
                <button class="navbar-toggle" onclick="toggleMenu()">☰</button>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" id="index">Home</a></li>
                    <li><a href="about.html" id="about">About Me</a></li>
                    <li><a href="writing.html" id="projects">Projects</a></li>
                    <li><a href="contact.html" id="contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
    header.innerHTML = headerHTML;
    const item = document.getElementById(ActiveItem);
    item.classList.add('active');
}