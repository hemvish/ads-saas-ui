// Victory AI - Main JavaScript

// Utility Functions
const utils = {
  // Format date
  formatDate: (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Show notification
  showNotification: (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#6366f1'};
      color: white;
      border-radius: 0.5rem;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  },

  // Confirm action
  confirmAction: (message) => {
    return confirm(message);
  },

  // Copy to clipboard
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      utils.showNotification('Copied to clipboard!', 'success');
    } catch (err) {
      utils.showNotification('Failed to copy', 'error');
    }
  }
};

// Form handling
document.addEventListener('DOMContentLoaded', () => {
  // Auto-focus first input in forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const firstInput = form.querySelector('input[type="text"], input[type="email"], input[type="url"], textarea');
    if (firstInput && !firstInput.readOnly) {
      firstInput.focus();
    }
  });

  // Handle form submissions with loading states
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
      }
    });
  });

  // Add fade-in animation to cards
  const cards = document.querySelectorAll('.card, .bg-slate-900');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
  });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = utils;
}

