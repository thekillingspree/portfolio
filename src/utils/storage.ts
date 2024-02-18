interface UserStorage<T> {
  insert: (key: string, val: T) => void;
  get: (key: string) => T | null;
}

class LocalUserStorage<T> implements UserStorage<T> {
  insert(key: string, val: T) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get(key: string): T | null {
    const item = localStorage.getItem(key);

    if (item === null) return null;

    return JSON.parse(item);
  }
}
