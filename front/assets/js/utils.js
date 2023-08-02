const utilsModule = {
		// Show notification success modal
		showNotification: function (message, type = 'success') {
			const notification = document.getElementById('notification');
			notification.classList.remove('is-hidden');
			notification.classList.add(`is-${type}`);
			notification.querySelector('.notification__message').textContent = message;
		},

		// Hide notification success modal
		hideNotification: function () {
			const notificationModal = document.getElementById('notification');
			notificationModal.classList.add('is-hidden');
			// On supprime la classe is-success ou is-danger
			notificationModal.classList.remove('is-success', 'is-danger');
			// On supprime le message
			notificationModal.querySelector('.notification__message').textContent = '';
		}
}