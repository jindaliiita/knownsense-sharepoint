const getAllBlocksList = async () => {
  const url = "https://main--knownsense--jindaliiita.hlx.live/tools/sidekick/library.json";
  const result = await fetch(url);
  let blockList = [];

  if (result.ok) {
    const textResult = await result.text();
    const jsonResult = JSON.parse(textResult);
    blockList = jsonResult.data;
  } else {
    console.error('Error:', result.status);
  }

  return blockList;
}

const blocklist = await getAllBlocksList();

const filterBlocklist = (text) => {
  
}

console.log(blocklist);
