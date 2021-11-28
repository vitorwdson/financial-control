// Element constants
const navButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('nav .nav-button');

// Function to hide the current page and open the new one
function updatePage(button: HTMLButtonElement, page: HTMLElement) {
  const oldButton = document.querySelector('nav .nav-button.active');
  const oldPage = document.querySelector('.page.active');

  console.log(oldButton, oldPage)
  console.log(button, page)

  if (oldPage === page)
    return;

  if (oldButton) {
    oldButton.classList.remove('active');
  } 
  if (oldPage) {
    oldPage.classList.remove('active');
  }

  setTimeout(() => {
    button.classList.add('active');
    page.classList.add('active');
    console.log('b');
  }, 300);
}

// Loop to apply the onClick event to all buttons
for (const button of navButtons) {
  const pageId = button.getAttribute('data-page-id');

  if (!pageId)
    continue;

  const page = document.getElementById(pageId)!;

  button.addEventListener('click', () => updatePage(button, page));
}
