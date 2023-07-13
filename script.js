// JavaScript code to handle the click event on "Mark all as read" link
const markAllAsReadLink = document.querySelector('.mark-all-as-read');
markAllAsReadLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior (e.g., navigating to another page)

  const commentContainers = document.querySelectorAll('.comment--container');
  const notificationCount = document.querySelector('.notification--count');

  commentContainers.forEach(function(container) {
    const notif = container.querySelector('.notif');
    if (notif) {
      notif.style.display = 'none';
      container.style.backgroundColor = 'white';
    }
  });

  notificationCount.innerText = '0'; // Set the notification counter to zero
});

// JavaScript code to handle the click event on a comment--container
const commentContainers = document.querySelectorAll('.comment--container');
const notificationCount = document.querySelector('.notification--count');

commentContainers.forEach(function(container) {
  container.addEventListener('click', function() {
    const notif = this.querySelector('.notif');
    if (notif && notif.style.display !== 'none') {
      notif.style.display = 'none';
      this.style.backgroundColor = 'white';
      updateNotificationCounter(notificationCount, -1);
    }
  });
});

// Function to update the notification counter
function updateNotificationCounter(counterElement, value) {
  let count = parseInt(counterElement.innerText);
  count += value;
  count = Math.max(0, count); // Ensure count is not negative
  counterElement.innerText = count;
}
