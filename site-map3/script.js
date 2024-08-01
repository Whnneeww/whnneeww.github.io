async function fetchSitemap() {
    try {
        const response = await fetch('https://huuze.f5.si/sitemap.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const urls = xml.getElementsByTagName('url');

        const gallery = document.getElementById('gallery');
        for (let url of urls) {
            const loc = url.getElementsByTagName('loc')[0].textContent;
            const title = url.getElementsByTagName('title')[0]?.textContent || "タイトルなし";
            const image = url.getElementsByTagName('image:loc')[0]?.textContent || 'nositeimg.png';

            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${image}" onerror="this.onerror=null; this.src='nositeimg.png';" alt="${title}">
                <h2>${title}</h2>
            `;

            gallery.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching the sitemap:', error);
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('dark');
    });
}

function setInitialTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }
}

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

// 初期設定をシステム設定に基づいて行う
setInitialTheme();
fetchSitemap();