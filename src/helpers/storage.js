export function storage(key, data = null) {
  if (!data) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
