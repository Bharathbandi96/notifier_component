import './style.css';
import './notifier.js';
import './notifier.css';

(() => {
  Notifier.notify(`This is information notifier which is used to provide some information to users.`, 'information');
  Notifier.notify('This is confirmation notifier which is used to provide some confirmation messages to users.', 'confirm');
  Notifier.notify('This is success notifier which is used to provide information upon success to users.', 'success');
  Notifier.notify('This is warning notifier which is used to provide some warning messages to users.', 'warning');
  Notifier.notify('This is error notifier which is used to provide some error messages to users.', 'error');
})();
