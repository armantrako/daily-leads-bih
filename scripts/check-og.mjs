const list = [
  'https://www.facebook.com/groups/1454355431246099/',
  'https://www.facebook.com/groups/3000139610340158/',
  'https://www.facebook.com/groups/halotuzla/',
  'https://www.facebook.com/groups/oglasizenica/',
  'https://www.facebook.com/groups/banjaluka.kupujemprodajem/',
  'https://www.facebook.com/groups/1473778497899650/',
  'https://www.facebook.com/groups/204180190242836/',
  'https://www.facebook.com/groups/617003175017831/'
];

async function run() {
  for (const u of list) {
    try {
      const res = await fetch(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      const mTitle = html.match(/<meta property="og:title" content="([^"]+)"/i) || html.match(/<title>([^<]+)<\/title>/i);
      const mDesc = html.match(/<meta property="og:description" content="([^"]+)"/i);
      console.log(JSON.stringify({
        url: u,
        title: mTitle ? mTitle[1].replace(' | Facebook', '').trim() : 'N/A',
        desc: mDesc ? mDesc[1].slice(0, 120) : 'N/A'
      }));
    } catch(e) {
      console.log(u, e.message);
    }
  }
}

run();
