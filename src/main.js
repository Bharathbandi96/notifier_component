import './style.css';
import './notifier.js';
import './notifier.css';

(() => {
  Notifier.notify(`This is information notifier which is used to provide some information to users.<h1>Hello, welcome to witness notifier component</h1> <p>This is a reusable notifier component which is exposed at global level. This component supports three type of notification i'e Information, confirmation, success, Warning and Error notifications. To use this component you just need to call Notifier.notify from anywhere in your app by passing message to notify and type of notification you want to render.</p>
  <strong>You can see the sample notifications once the application is loaded.</strong>
  </div>`, 'information');
  Notifier.notify('This is confirmation notifier which is used to provide some confirmation messages to users.', 'confirm');
  Notifier.notify('This is success notifier which is used to provide information upon success to users.', 'success');
  Notifier.notify('This is warning notifier which is used to provide some warning messages to users.', 'warning');
  Notifier.notify('This is error notifier which is used to provide some error messages to users.', 'error');
})();
