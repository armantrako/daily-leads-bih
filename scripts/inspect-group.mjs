async function inspect(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
    }
  });
  const html = await res.text();
  const title = html.match(/<title>([^<]+)<\/title>/i);
  const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/i);
  const ogDesc = html.match(/<meta property="og:description" content="([^"]+)"/i);
  console.log(url, {
    title: title ? title[1] : null,
    ogTitle: ogTitle ? ogTitle[1] : null,
    ogDesc: ogDesc ? ogDesc[1].slice(0, 100) : null
  });
}

async function main() {
  await inspect('https://www.facebook.com/groups/259921537867340/');
  await inspect('https://www.facebook.com/groups/1887605988078463/');
  await inspect('https://www.facebook.com/groups/748921941816938/');
  await inspect('https://www.facebook.com/groups/kupoprodajabihaciokolinabihaca/');
}

main();
