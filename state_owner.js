var state = {};

function get_state(state_name) {
	if(state_name in state) {
		return state[state_name];
	}
	return undefined;
}

function set_state(state_name, value) {
	if(state_name in state) {
		plog("Updating value of '" + state_name + "'.");
		state[state_name] = value;
	} else {
		plog("New state key '" + state_name + "'.");
		state[state_name] = value;
	}
}
