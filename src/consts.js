export const reducersActions = {
   FILTERS: {
      SET_SEARCH: "a1",
      SET_PRICES_RANGE: "a2",
      TOGGLE_SELECT_OF_RATING_OPTION: "a3",
      TOGGLE_SELECT_OF_HOSTING_OPTION: "a4"
   },

   SORTERS: {
      SET_SORT_BY: "b1",
   },

   DEALS: {
      SET_ALL: "c1"
      /*
      ADD: "c2",
      REMOVE: "c3",
      EDIT: "c4",
      */
   },
};

export const maxRatingStars = 5;

export const hostingTypesOptions = ["ארוחת בוקר", "לינה"];

export const pricesRangeLimits = [819, 6000];


export const ratingWorthwhileValueCompareToPrice = 400;
//  Intended for comparison in the "Most worthwhile" Deal sorting:
//  This means that the difference between a maximum rating and a minimum rating
//  is equivalent to an additional price of 400$ per day


export const sorterOptions = {
   CHEAP: '0',
   EXPENSIVE: '1',
   POPULAR: '2',
   UNPOPULAR: '3',
   WORTHWHILE: '4'
}

export const sorterOptionsData = {
   [sorterOptions.CHEAP]: {
      selectMenuText: "מחיר, מהנמוך לגבוה",
      buttonText: "הכי זול",
      iconSrc: "/images/sort_price2.png"
   },

   [sorterOptions.EXPENSIVE]: {
      selectMenuText: "מחיר, מהגבוה לנמוך"
   },

   [sorterOptions.POPULAR]: {
      selectMenuText: "דירוג, מהגבוה לנמוך",
      buttonText: "הכי פופולרי",
      iconSrc: "/images/sort_popular2.png"
   },

   [sorterOptions.UNPOPULAR]: {
      selectMenuText: "דירוג, מהנמוך לגבוה"
   },
   
   [sorterOptions.WORTHWHILE]: {
      selectMenuText: "הכי משתלם",
      buttonText: "הכי משתלם",
      iconSrc: "/images/sort_worthwhile.png"
   }
};

export const headerToolbarOptions = [
   "צור קשר",
   "טיולים מאורגנים",
   "טיסות",
   "חבילות נופש",
   "דף הבית"
];


export const footerToolbarOptions = {
   'כללי': [
      "צור קשר",
      "עלינו",
      "כללי",
      "שירות לקוחות"
   ],
   'נופש לזוגות': [
      "טיסות לברלין",
      "טיסות לפריז",
      "טיסות לכרתים",
      "טיסות ללונדון",
      "טיסות לפראג"
   ],
   'נופש למשפחות': [
      "טיסות לברלין",
      "טיסות לפריז",
      "טיסות לכרתים",
      "טיסות ללונדון",
      "טיסות לפראג"
   ],
   'טיסות לחו"ל': [
      "טיסות לברלין",
      "טיסות לפריז",
      "טיסות לכרתים",
      "טיסות ללונדון",
      "טיסות לפראג"
   ]
};

export const socialMadiaImages = [
   "/images/social_madia_logo_a.png",
   "/images/social_madia_logo_b.png",
   "/images/social_madia_logo_c.png",
   "/images/social_madia_logo_d.png",
   "/images/social_madia_logo_e.png",
];



