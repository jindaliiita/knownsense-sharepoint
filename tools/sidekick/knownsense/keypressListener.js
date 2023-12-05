document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is an alphabet
        event.stopPropagation();
        if (/^[a-zA-Z0-9]$/.test(event.key)) {
          console.log('pressed key:', event.key);
          // Add your custom logic here
        }
      });
  });