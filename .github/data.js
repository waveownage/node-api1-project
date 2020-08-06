let users = [
	{ id: "1", name: "Bulbasaur", bio: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger." },
	{ id: "2", name: "Squirtle", bio: "When it retracts its long neck into its shell, it squirts out water with vigorous force." },
	{ id: "3", name: "Charmander", bio: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."  },
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}