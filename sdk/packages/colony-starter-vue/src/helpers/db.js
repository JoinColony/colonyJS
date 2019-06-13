// This is a mock database that uses local storage.

// Get item
export function get(key) {
  return localStorage.getItem(`colony-${key}`);
}

// Get all items
export function getAll() {
  // Get all colony related local storage keys
  const keys = Object.keys(localStorage).filter(item => item.includes('colony-'));

  // Declare items
  const items = [];

  // Loop through keys
  keys.forEach((key) => {
    // Get item
    const item = localStorage.getItem(key);

    // Add item
    items.push({
      name: key.substring(7),
      data: item,
    });
  });

  // Return items
  return items;
}

// Remove item
export function remove(key) {
  return localStorage.removeItem(`colony-${key}`);
}


// Set item
export function set(key, value) {
  localStorage.setItem(`colony-${key}`, value);
}
