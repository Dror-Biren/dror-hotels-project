export const ratingWorthCompareToPrice = 400;
//  Intended for comparison in the "Most worthwhile" Deal sorting:
//  This means that the difference between a maximum rating and a minimum rating
//  is equivalent to an additional price of 400$ per day

export const sorterKeys = {
   CHEAP: '0',
   EXPENSIVE: '1',
   POPULAR: '2',
   UNPOPULAR: '3',
   WORTHWHILE: '4'
}

export const sorterOptionsData = {
   [sorterKeys.CHEAP]: {
      selectMenuText: "מחיר, מהנמוך לגבוה",
      buttonText: "הכי זול",
      iconSrc: "/images/sort_price2.png"
   },

   [sorterKeys.EXPENSIVE]: {
      selectMenuText: "מחיר, מהגבוה לנמוך"
   },

   [sorterKeys.POPULAR]: {
      selectMenuText: "דירוג, מהגבוה לנמוך",
      buttonText: "הכי פופולרי",
      iconSrc: "/images/sort_popular2.png"
   },

   [sorterKeys.UNPOPULAR]: {
      selectMenuText: "דירוג, מהנמוך לגבוה"
   },
   
   [sorterKeys.WORTHWHILE]: {
      selectMenuText: "הכי משתלם",
      buttonText: "הכי משתלם",
      iconSrc: "/images/sort_worthwhile.png"
   }
};
