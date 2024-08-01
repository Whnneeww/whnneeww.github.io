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
            const title = url.getElementsByTagName('title')[0]?.textContent || "タイトルなし"; // タイトルを直接取得
            const image = url.getElementsByTagName('image:loc')[0]?.textContent || 'nositeimg.png';

            const card = document.createElement('div');
            card.className = 'card';

            // リンク付きカードを作成
            card.innerHTML = `
                <a href="${loc}" target="_blank" class="card-link">
                    <img src="${image}" onerror="this.onerror=null; this.src='nositeimg.png';" alt="${title}">
                    <h2>${title}</h2>
                </a>
            `;

            gallery.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching the sitemap:', error);
    }
}

// 初期設定をシステム設定に基づいて行う
setInitialTheme();
fetchSitemap();
