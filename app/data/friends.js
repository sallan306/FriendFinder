// the application's data should be saved here as an array of objects
//each of these should follow format below:
// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
let object = {
    tableData: [{
    "Name": "Kyle",
    "photo": "409-939-7554",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]},
    {
    "Name": "Kyle",
    "photo": "409-939-7554",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]},
    {
        "Name": "Kyle",
        "photo": "409-939-7554",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
    ]},

]
    add: function(data){
        console.log(data);
        if (object.tableData.length<5){
            console.log("You have a reservation");
        } else {
            console.log("you are on the waitlist");
        }
        object.tableData.push(data);
    }
};

module.exports = object;