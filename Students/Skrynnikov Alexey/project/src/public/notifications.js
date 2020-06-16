function notifications(window) {
    'use strict';
    var pushElement = document.querySelector('.push');
    var pushImgElement = document.querySelector('.push__image');

    function isPushSupported() {
      if (Notification.permission === 'denied') {
        alert('Вы заблокировали push-уведомления');
        return;
      }
      if (!('PushManager' in window)) {
        alert('Извините, push-уведомления не поддерживаются вашим браузером.');
        return;
      }
      navigator.serviceWorker.ready
        .then(function (registration) {
          registration.pushManager.getSubscription()
          .then(function (subscription) {
            if (subscription) {
              changePushStatus(true);
            }
            else {
              changePushStatus(false);
            }
          })
          .catch(function (error) {
            console.error('Возникла ошибка', error);
          });
        });
    }
    function subscribePush() {
      navigator.serviceWorker.ready.then(function(registration) {
        if (!registration.pushManager) {
          alert('push-уведомления не поддерживаются вашим браузером.');
          return false;
        }
        registration.pushManager.subscribe({
          userVisibleOnly: true 
        })
        .then(function (subscription) {
          alert('Успешно подписаны.');
          console.info('Подписаны на push-уведомления.');
          console.log(subscription);
          changePushStatus(true);
        })
        .catch(function (error) {
          changePushStatus(false);
          console.error('Ошибка подписки на push-уведомления: ', error);
        });
      })
    }
   
    function unsubscribePush() {
      navigator.serviceWorker.ready
      .then(function(registration) {
        registration.pushManager.getSubscription()
        .then(function (subscription) {
          if(!subscription) {
            alert('Невозможно отписаться от push-уведомлений.');
            return;
          }
          subscription.unsubscribe()
            .then(function () {
              alert('Успешно отписаны.');
              console.info('push-уведомлений отменены.');
              console.log(subscription);
              changePushStatus(false);
            })
            .catch(function (error) {
              console.error(error);
            });
        })
        .catch(function (error) {
          console.error('Не получилось отписаться от push-уведомлений.');
        });
      })
    }
    function changePushStatus(status) {
      pushElement.dataset.checked = status;
      pushElement.checked = status;
      if (status) {
        pushElement.classList.add('active');
        pushImgElement.src = '../images/push-on.png';
      }
      else {
       pushElement.classList.remove('active');
       pushImgElement.src = '../images/push-off.png';
      }
    }
    pushElement.addEventListener('click', function () {
      var isSubscribed = (pushElement.dataset.checked === 'true');
      if (isSubscribed) {
        unsubscribePush();
      }
      else {
        subscribePush();
      }
    });
   
    isPushSupported();
   };
   setTimeout(function() {  notifications(window) }, 1000);