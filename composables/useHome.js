export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const apiUrl = 'https://nuxr3.zeabur.app/api/v1/home/news/';

  const getList = async () => {
    try {
      isLoading.value = true;
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      newsList.value = data.result;
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
    isLoading.value = false;
  };

  return {newsList, isLoading, getList};
};
