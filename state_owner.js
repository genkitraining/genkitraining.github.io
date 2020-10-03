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

// Returns the key names of keys starting
// with the prefix given as argument that
// reside in the state
function get_state_prefix(prefix) {
	var entries_starting_with = [];
	for(const [k, v] of Object.entries(state)) {
		if(k.startsWith(prefix)) {
			entries_starting_with.push(k);
		}
	}
	
	return entries_starting_with;
}
