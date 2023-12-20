import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [watchedList, setWatchedList] = useState(() => {
    const list = localStorage.getItem("watched");
    if (list) {
      return JSON.parse(list);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([...watchedList]));
  }, [watchedList]);

  return [watchedList, setWatchedList];
}
