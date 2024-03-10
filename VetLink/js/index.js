document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var popup = document.getElementById('popup');
    var popupContent = document.getElementById('popupContent');
    var closePopup = document.getElementById('closePopup');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        defaultDate: '2024-03-01',
        editable: true,
        eventLimit: true, 
        events: 'data.json',
        eventClick: function (info) {
            var event = info.event;
            var title = event.title;
            var start = event.start;
            var end = event.end;
            var reason = event.extendedProps.reason;
            var person = event.extendedProps.person;
            var picture = event.extendedProps.picture;

          
            popupContent.innerHTML = `
                <h2>${title}</h2>
                <p><strong>Start:</strong> ${start}</p>
                <p><strong>End:</strong> ${end}</p>
                <p><strong>Reason:</strong> ${reason}</p>
                <p><strong>Person:</strong> ${person}</p>
                <img src="${picture}" alt="Animal Picture">
            `;


            popup.style.display = 'block';
        }
    });
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    calendar.render();
});
