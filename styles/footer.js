
function footer() {
    // Create footer box
    const footerBox = document.createElement('div');
    footerBox.id = 'footer-box';

    // Create footer
    const footer = document.createElement('div');
    footer.id = 'footer';

    // Create footer infos
    const footerInfos = document.createElement('div');
    footerInfos.id = 'footer-infos';

    // Create info content
    const infoDiv = document.createElement('div');
    const infoH2 = document.createElement('h2');
    infoH2.textContent = 'Branden';
    const infoP = document.createElement('p');
    infoP.innerHTML = '<br> Husted<br>';

    infoDiv.appendChild(infoH2);
    infoDiv.appendChild(infoP);

    // Create footer icons
    const footerIcons = document.createElement('div');
    footerIcons.id = 'footer-icons';

    const socialMediaLinks = [
        { href: "https://github.com/brandenHusted", class: "fa fa-github" },
        { href: "https://www.linkedin.com/in/branden-husted-6901aa211/", class: "fa fa-linkedin" },
        { href: "https://www.instagram.com/brandenhusted21/", class: "fa fa-instagram" },
        { href: "mailto:statefan1324@gmail.com", class: "fa fa-envelope" }
    ];

    socialMediaLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank';
        a.className = link.class;
        footerIcons.appendChild(a);
    });

    // Append info and icons to footer infos
    footerInfos.appendChild(infoDiv);
    footerInfos.appendChild(footerIcons);

    // Create footer date
    const footerDate = document.createElement('div');
    footerDate.id = 'footer-date';
    const footerDateP = document.createElement('p');
    footerDateP.textContent = new Date().getFullYear();

    footerDate.appendChild(footerDateP);

    // Append all to footer
    footer.appendChild(footerInfos);
    footer.appendChild(footerDate);

    // Append footer to footer box
    footerBox.appendChild(footer);

    // Append footer box to body
    document.body.appendChild(footerBox);
}

// Call footer function to append the footer to the page
footer();
