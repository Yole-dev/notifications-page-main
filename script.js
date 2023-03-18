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
const message = document.querySelector('.message');

markAllBtn.addEventListener('click', function() {
    users.forEach(function(el){
        el.classList.add('viewed');
        const notifications = users.splice();
        notificationNum.innerHTML = `${notifications.length}`
    });


});


