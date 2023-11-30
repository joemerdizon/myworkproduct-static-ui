document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialDate: '2022-04-01',
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectMirror: true,
    // select: function(arg) {
    //   var title = prompt('Event Title:');
    //   if (title) {
    //     calendar.addEvent({
    //       title: title,
    //       start: arg.start,
    //       end: arg.end,
    //       allDay: arg.allDay
    //     })
    //   }
    //   calendar.unselect()
    // },
    // eventClick: function(arg) {
      // if (confirm('Are you sure you want to delete this event?')) {
      //   arg.event.remove()
      // }
    // },
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2022-04-01'
      },
      {
        title: 'Long Event',
        start: '2022-04-07',
        end: '2022-04-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2022-04-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2022-04-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2022-04-11',
        end: '2022-04-13'
      },
      {
        title: 'Meeting',
        start: '2022-04-12T10:30:00',
        end: '2022-04-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2022-04-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2022-04-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2022-04-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2022-04-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2022-04-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2022-04-28'
      }
    ]
  });
  calendar.setOption('contentHeight', 600);
    
  $('#modal-schedule').on('shown.bs.modal', function () {
    calendar.render();
  });
});

$(function () {
  $('[data-toggle="popover"]').popover()
})


$('.popover-dismiss').popover({
  trigger: 'focus'
})
