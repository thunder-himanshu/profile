
import fs from 'fs';

async function fetchScreen() {
  const apiKey = "AQ.Ab8RN6Imbi6qQl4MUw7bZucTHSd-u3gY8CGi_dL27Isp2vVJ6w";
  const url = "https://stitch.googleapis.com/v1/projects/7192257764587813209/screens/ad40d2ce2c564aebaabcd1b55fffc0a0";

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey
      }
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error(text);
      process.exit(1);
    }

    const data = await response.json();
    fs.writeFileSync('screen.json', JSON.stringify(data, null, 2));
    console.log("Successfully saved screen.json");

  } catch (error) {
    console.error("Fetch failed:", error);
    process.exit(1);
  }
}

fetchScreen();
