const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.filter-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach((item) => item.classList.remove('selected'));
    tab.classList.add('selected');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.content-row').forEach((row) => {
      row.classList.toggle('hidden', filter !== 'all' && row.dataset.status !== filter);
    });
  });
});

document.querySelector('#add-content').addEventListener('click', () => showToast('Draft added to today’s queue'));
document.querySelector('#create-button').addEventListener('click', () => showToast('Content composer is ready for your next story'));
document.querySelectorAll('.row-menu').forEach((button) => {
  button.addEventListener('click', () => showToast('More actions coming from this item menu'));
});

document.querySelector('.mobile-menu').addEventListener('click', () => showToast('Navigation is available on the desktop workspace'));