let isHateToLove = true;  // Track the state of replacement (initially "hate" to "love")

document.getElementById('loveHateButton').addEventListener('click', function() {
  // Get the text elements by ID
  const elements = document.querySelectorAll('#hate, #Hate, #hating');

  // Toggle between the replacement of words
  elements.forEach(function(element) {
    let text = element.textContent || element.innerText;

    if (isHateToLove) {
      // Replace "hate" with "love", "Hate" with "Love", and "hating" with "loving"
      text = text.replace(/\bhate\b/g, "love")
                 .replace(/\bHate\b/g, "Love")
                 .replace(/\bhating\b/g, "loving");
    } else {
      // Replace "love" with "hate", "Love" with "Hate", and "loving" with "hating"
      text = text.replace(/\blove\b/g, "hate")
                 .replace(/\bLove\b/g, "Hate")
                 .replace(/\bloving\b/g, "hating");
    }

    // Update the text in the element
    element.textContent = text;
  });

  // Toggle the state for the next click
  isHateToLove = !isHateToLove;
});
