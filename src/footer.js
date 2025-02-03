import { footerData } from "../footerData.js";

document.addEventListener('DOMContentLoaded', function() {
    function generateFooter() {
        const footerContainer = document.querySelector('.footer-container');

        const footerList = document.createElement('ul');

        footerData.forEach(item => {
            const footerItem = document.createElement('li');
            const footerLink = document.createElement('a');

            footerLink.href = item.url;
            footerLink.textContent = item.name;

            if (item.iconClass) {
                const icon = document.createElement('i');
                icon.className = item.iconClass;
                footerLink.prepend(icon);
            }

            footerItem.appendChild(footerLink);
            footerList.appendChild(footerItem);
        });

        footerContainer.innerHTML = '';
        footerContainer.appendChild(footerList);

        footerList.classList.add('footer-list');
    }

    generateFooter();
});