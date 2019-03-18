// This is a mock database that uses local storage.

// Get item
exports.get = key => localStorage.getItem(`colony-${key}`)

// Get all items
exports.getAll = () => {

  // Get all colony related local storage keys
  const keys = Object.keys(localStorage).filter(item => item.includes('colony-'))

  // Declare items
  const items = []

  // Loop through keys
  keys.forEach(key => {

    // Get item
    const item = localStorage.getItem(key)

    // Add item
    items.push({
      name: key.substring(7),
      data: item,
    })

  })

  // Return items
  return items

}

// Remove item
exports.remove = key => localStorage.removeItem(`colony-${key}`)

// Set item
exports.set = (key, value) => localStorage.setItem(`colony-${key}`, value)
