const getAllBlocksList = async () => {
  const url = "https://main--knownsense--jindaliiita.hlx.live/tools/sidekick/library.json";
  const result = await fetch(url);

  if (result.ok) {
    const textResult = await result.text();
    console.log(textResult);
  } else {
    console.error('Error:', result.status);
  }
  // fetch(url)
  //   .then(response => response.text())
  //   .then(html => {
  //     // Create a temporary element to parse the HTML content
  //     const tempElement = document.createElement('div');
  //     tempElement.innerHTML = html;

  //     // Access the block list from the rendered document
  //     const blockList = tempElement.querySelectorAll('.block-list'); // Update this selector with the actual selector for your blocks

  //     // Now you can do something with the block list, such as logging it to the console
  //     console.log('Block List:', blockList);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching the document:', error);
  //   });
}

await getAllBlocksList();

document.addEventListener('keypress', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);
