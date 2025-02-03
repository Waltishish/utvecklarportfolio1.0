import { navbarData } from "../navbarData.js";

document.addEventListener('DOMContentLoaded', function() {
    function generateNavbar() {
        const navbarContainer = document.querySelector('.navbar-container');

        const leftList = document.createElement('ul');
        const rightList = document.createElement('ul');

        navbarData.forEach(item => {
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');

            navLink.href = item.url;
            navLink.textContent = item.name;

            if (item.iconClass) {
                const icon = document.createElement('i');
                icon.className = item.iconClass;
                navLink.prepend(icon);
            }

            navItem.appendChild(navLink);

            if (item.iconClass) {
                rightList.appendChild(navItem);
            } else {
                leftList.appendChild(navItem);
            }
        });

        navbarContainer.innerHTML = '';
        navbarContainer.appendChild(leftList);
        navbarContainer.appendChild(rightList);

        leftList.classList.add('navbar-left');
        rightList.classList.add('navbar-right');
    }

    generateNavbar();

    const navbar = document.querySelector('.navbar-container');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});
