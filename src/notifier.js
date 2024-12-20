/**
 * Notifier.notify function shows push notifications
 * @param {string} message Notification message content
 * @param {string} type Notification type, types supported: 'info' or 'warning' or 'error', Default: 'info'
 */

(function (global) {
  function Notifier() {
    this.info = [];
    this.warning = [];
    this.error = [];
    this.widgets = [];
    this.queue = [];
    this.messageWaitingTime = 3000;
    this.container = document.getElementById('notifications');
  }

  Notifier.prototype.notify = function (message, type) {
    var icon;
    if (type === undefined || type === null) {
      type = 'info';
    }
    switch (type.toLowerCase()) {
      case 'info':
        this.info.unshift(message);
        icon = './Information.png';
        break;
      case 'warning':
        this.warning.unshift(message);
        icon = './Warning.png';
        break;
      case 'error':
        this.error.unshift(message);
        icon = '/Error.png';
        break;
      default:
        if (typeof message === 'string') {
          this.info.unshift(message);
          icon = 'Information.png';
          type = 'info';
        } else {
          var invalidParameters = true;
        }
    }
    if (!invalidParameters) {
      createNotificationWidget.call(this, icon, type, message);
    }
  };

  function createNotificationWidget(icon, type, message) {
    this.widgets.unshift(document.createElement('div'));
    this.widgets[0].className = 'notification ' + type;

    this.queue.unshift(this.widgets[0]);

    var header = document.createElement('div');
    header.className = 'notificationHead';
    header.innerHTML =
      "<span class='icon' style='background:url(" +
      icon +
      ")'><b></b></span><h4>" +
      type.toUpperCase() +
      "</h4><span class='close'></span>";
    this.queue[0].appendChild(header);

    var horizontleLine = document.createElement('hr');
    this.queue[0].appendChild(horizontleLine);

    var body = document.createElement('div');
    body.className = 'notificationMessage';
    var messageParagraph = document.createElement('p');
    messageParagraph.innerText = message;
    body.appendChild(messageParagraph);
    this.queue[0].appendChild(body);

    if (this.queue.length === 1) {
      this.queueWaiting = false;
      showNotification.call(this);
    }
  }

  function showNotification() {
    console.log(document.getElementById('notifications'));
    if (this.queue[this.queue.length - 1] && !this.queueWaiting) {
      this.queueWaiting = true;
      this.container.appendChild(this.queue[this.queue.length - 1]);
      this.timerId = setTimeout(
        removeElement.bind(this),
        this.messageWaitingTime
      );
      this.resume = resumeTimer.bind(this);
      this.queue[this.queue.length - 1].addEventListener(
        'mouseenter',
        function () {
          clearTimeout(this.timerId);
          this.queue[this.queue.length - 1].addEventListener(
            'mouseleave',
            this.resume
          );
        }.bind(this)
      );
      this.queue[this.queue.length - 1]
        .querySelector(':scope > div.notificationHead > span.close')
        .addEventListener('click', removeElement.bind(this));
    }
  }

  function removeElement() {
    this.container.removeChild(this.queue.pop());
    this.queueWaiting = false;
    setTimeout(showNotification.bind(this), 500);
  }

  function resumeTimer() {
    this.timerId = setTimeout(removeElement.bind(this), 1000);
    this.queue[this.queue.length - 1].removeEventListener(
      'mouseleave',
      this.resume
    );
  }

  global.Notifier = new Notifier();
})(window);
