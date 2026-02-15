
import fs from 'fs';
import path from 'path';

async function downloadAssets() {
  try {
    const screenJson = JSON.parse(fs.readFileSync('screen.json', 'utf8'));
    
    if (screenJson.htmlCode && screenJson.htmlCode.downloadUrl) {
      console.log('Downloading HTML code...');
      const response = await fetch(screenJson.htmlCode.downloadUrl);
      if (!response.ok) throw new Error(`Failed to download HTML: ${response.statusText}`);
      const text = await response.text();
      fs.writeFileSync('imported_screen.html', text);
      console.log('Saved imported_screen.html');
    }

    if (screenJson.screenshot && screenJson.screenshot.downloadUrl) {
      console.log('Downloading screenshot...');
      const response = await fetch(screenJson.screenshot.downloadUrl);
      if (!response.ok) throw new Error(`Failed to download screenshot: ${response.statusText}`);
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync('imported_screen.png', Buffer.from(arrayBuffer));
      console.log('Saved imported_screen.png');
    }

  } catch (error) {
    console.error('Download failed:', error);
    process.exit(1);
  }
}

downloadAssets();
