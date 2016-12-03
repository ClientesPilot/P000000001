var events = {
	'11-21-2016' : [{content: 'No hay evento en la Agenda', allDay: true}],
	'11-11-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-11-2016'}], 
	'11-01-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-01-2016'}],
	'11-25-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-25-2016'}],
	'11-01-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-01-2016'}],
	'11-01-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-01-2016'}],
	'11-07-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-07-2016'}],
	'11-15-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-15-2016'}],
	'11-02-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate: '11-02-2016'}],
	'11-01-2016' : [{content: 'No hay evento en la Agenda', allDay: true, endDate:'11-01-2016'}]
},
t = new Date(),
//Creation of today event
today = ((t.getMonth() + 1) < 10 ? '0' + (t.getMonth() + 1) : (t.getMonth() + 1)) + '-' + (t.getDate() < 10 ? '0' + t.getDate() : t.getDate()) + '-' +t.getFullYear();
events[today] = [{content: 'TODAY', allDay: true}];
