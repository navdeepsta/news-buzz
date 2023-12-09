export const readingListDB = {
  saveToReadingList: (article) => {
    const readingList = localStorage.getItem("readingList");
    if(readingList){
        let result = JSON.parse(readingList);
        result.push(article);
        localStorage.setItem("readingList", JSON.stringify(result));
    }else{
        localStorage.setItem("readingList", JSON.stringify([article]));
    }
  },

  readFromReadingList: () => {
    const readingList = localStorage.getItem("readingList");
    if(readingList) return JSON.parse(readingList);
    else
    return [];
  },
};
