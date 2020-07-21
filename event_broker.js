var subscriptions = {};
function subscribe_to_event(event_name, callback) {
	if(subscriptions[event_name]) {
		subscriptions[event_name].push(callback);
	} else {
		subscriptions[event_name] = [ callback ];
	}
}

function new_event(event_name, event) {
	if(! subscriptions[event_name] ) {
		return;
	}
	for(var i = 0; i < subscriptions[event_name].length; i++) {
		subscriptions[event_name][i](event);
	}
}
