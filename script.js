`use strict`;

const markAllBtn = document.querySelector('.markAll');
const notificationNum = document.querySelector('.notificationNum');

//users
const markNotification = document.querySelector('.mark');
const angelaNotification = document.querySelector('.angela');
const jacobNotification = document.querySelector('.jacob');
const rizkyNotification = document.querySelector('.rizky');
const kimberlyNotification = document.querySelector('.kimberly');
const nathanNotification = document.querySelector('.nathan');
const annaNotification = document.querySelector('.anna');

const users = [markNotification, angelaNotification, jacobNotification, rizkyNotification, 
kimberlyNotification, nathanNotification, annaNotification];
notificationNum.innerHTML = `${users.length}`;


const message = document.querySelector('.message');

message.classList.add('hidden');

//for counting the notifications on the notification
const notificationCount = function() {
    notificationNum.innerHTML = `${users.length--}`
};

markAllBtn.addEventListener('click', function() {
    markAllBtn.style.color = 'hsl(219, 85%, 26%)';
    users.forEach(function(el){
        el.classList.add('viewed');
        const notifications = users.splice();
        notificationNum.innerHTML = `${notifications.length}`
    });
});


markNotification.addEventListener('click', function() {
    markNotification.classList.add('viewed');
    notificationCount();
});

angelaNotification.addEventListener('click', function() {
    angelaNotification.classList.add('viewed');
    notificationCount();
});

jacobNotification.addEventListener('click', function() {
    jacobNotification.classList.add('viewed');
    notificationCount();
});



rizkyNotification.addEventListener('click', function() {
    rizkyNotification.classList.add('viewed');
    message.classList.remove('hidden');
    notificationCount();
});

message.addEventListener('click', function() {
    message.style.background = 'hsl(205, 33%, 90%)';
    message.style.border = 'none';
});

kimberlyNotification.addEventListener('click', function() {
    kimberlyNotification.classList.add('viewed');
    notificationCount();
});

nathanNotification.addEventListener('click', function() {
    nathanNotification.classList.add('viewed');
    notificationCount();
});

annaNotification.addEventListener('click', function() {
    annaNotification.classList.add('viewed');
    notificationCount();
});




