export function getLocalStorage(key: string) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key: string, value: any): void {
  return localStorage.setItem(key, value);
}

export function clearLocalStorage() {
  return localStorage.clear();
}
