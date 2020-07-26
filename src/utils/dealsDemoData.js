import moment from 'moment';

export const dealsDemoServerUrl = "https://api.openaccessbutton.org/subscription?uid=WpGYaq7yRCNggawBY&id=10.1145/2908080.2908114";


const getTimeValue = time => moment(time, "DD/MM , h:mm").valueOf();
export const dealsDemoData = JSON.stringify([
   {
      hotelName: "Plaza Tel-Aviv",
      price: 1000,
      rating: 4,
      startTime: getTimeValue('19/8 , 16:30'),
      finishTime: getTimeValue('20/8 , 11:00'),
      hostingType: "ארוחת בוקר",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/unrelated%2F1.jfif?alt=media&token=34419bc0-4fc9-41fc-b150-284ec33d079b",
      id: "0"
   },
   {
      hotelName: "Plaza Netanya",
      price: 3500,
      rating: 3,
      startTime: getTimeValue('25/7 , 20:00'),
      finishTime: getTimeValue('29/7 , 11:00'),
      hostingType: "ארוחת בוקר",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/unrelated%2F2.jfif?alt=media&token=e41dcbbc-8d1e-43d6-a9bc-892b735c600b",
      id: "1"
   },
   {
      hotelName: "Dan Clab-Hotel",
      price: 2300,
      rating: 5,
      startTime: getTimeValue('1/8 , 12:00'),
      finishTime: getTimeValue('3/8 , 19:00'),
      hostingType: "לינה",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/unrelated%2F3.jfif?alt=media&token=daa774cb-4441-4e89-8417-9b3cec4c8242",
      id: "2"
   },
   {
      hotelName: "Hilton",
      price: 2450,
      rating: 2,
      startTime: getTimeValue('1/8 , 12:00'),
      finishTime: getTimeValue('3/8 , 19:00'),
      hostingType: "לינה",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/unrelated%2F4.jfif?alt=media&token=0dda1ac6-a073-4305-9c3a-3d92d4936507",
      id: "3"
   },
   {
      hotelName: "Kinar",
      price: 3000,
      rating: 5,
      startTime: getTimeValue('7/8 , 14:00'),
      finishTime: getTimeValue('8/8 , 14:00'),
      hostingType: "לינה",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/unrelated%2F5.jfif?alt=media&token=3ef97175-f14c-4ae0-bdec-a217857b9fb1",
      id: "4"
   },
]);

 



//const test = getTimeValue('20/8 , 11:20');
//console.log(moment(test).format("YYYY/MM/DD , h:mm"));