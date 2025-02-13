# Notifier Component

Welcome to the Witness Notifier Component! This is a reusable global-level notification system that supports multiple types of notifications:

1. Information
2. Confirmation
3. Success
4. Warning
5. Error


### To run the server,
```bash
#To build the application
npm run build

#To run the application
npm run dev
```


### How to Use
To trigger a notification, simply call the following function from anywhere in your application

```bash
Notifier.notify(message, notifier_type);
```


### Example Usage
Open the browser console and execute:

```bash
Notifier.notify("This is a success message!", "success");
```


### Try It Out!
Once the application loads, you can see sample notifications in action. Feel free to experiment by passing different messages and notification types ('information', 'confirmation', 'success', 'warning', 'error').