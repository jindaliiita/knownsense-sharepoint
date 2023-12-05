document.addEventListener('keypress', function(event) {
  // event.stopPropagation();
  if (/^[a-zA-Z0-9]$/.test(event.key)) {
      console.log('pressed key:', event.key);
  }
});