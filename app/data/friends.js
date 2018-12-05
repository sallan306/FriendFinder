// the application's data should be saved here as an array of objects
//each of these should follow format below:
let object = {
    tableData: [
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
        1   ]
    },{
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
        1   ]
    },{
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
        1   ]
    }],
    add: function(data){
        console.log(data);
        console.log("You have submitted your profile info!");
        object.tableData.push(data);
    }

};

module.exports = object;