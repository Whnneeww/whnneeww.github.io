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
            const image = url.getElementsByTagName('image:loc')[0]?.textContent || 'nositeimg.png';
            const titleElements = url.getElementsByTagName('title');
            const titleElement = url.querySelector("title"); 
            const title = titleElement ? titleElement.textContent : "タイトルなし";
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

// ビジュアルテーマ切り替えや初期設定の関数（必要に応じて実装）
function toggleTheme() {
    // ここにテーマ切替のロジックを入れます
}

function setInitialTheme() {
    // 初期テーマの設定ロジックを実装します
}

// ページ読み込み時にSitemapを取得
document.addEventListener('DOMContentLoaded', fetchSitemap);
