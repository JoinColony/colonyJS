// This is a mock database that uses local storage.

// Clear data
exports.clear = () => localStorage.clear()

// Get item
exports.get = key => localStorage.getItem(key)

// Remove item
exports.remove = key => localStorage.removeItem(key)

// Set item
exports.set = (key, value) => localStorage.setItem(key, value)
