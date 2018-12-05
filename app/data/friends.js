// the application's data should be saved here as an array of objects
//each of these should follow format below:
let object = {
    tableData: [
    {
    "name": "Thor, God of Thunder",
    "image": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/03/104819285-thor.530x298.jpg?v=1509730606",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1   ]
    },{
    "name": "Deadpool",
    "image": "https://amp.businessinsider.com/images/56b3ba68dd0895480b8b4833-750-563.jpg",
    "scores": [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2   ]
    },{
    "name": "Wolverine",
    "image": "https://cdn3.movieweb.com/i/article/ti2GElKpcH2ZCKPi3mlPOhXNsj3uTj/798:50/Wolverine-Movie-New-Logan-Hugh-Jackman-Dougray-Scott.jpg",
    "scores": [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3   ]
    },{
    "name": "Scarlet Witch",
    "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/01/Scarlet-Witch-Avengers-Disassembled.jpg",
    "scores": [
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4   ]
    },{
    "name": "Thanos",
    "image": "https://cdn-images-1.medium.com/max/2000/1*bpZ12wWUvrCtzXU0ux0Pjw.jpeg",
    "scores": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5   ]
    },{
    "name": "Iron Man",
    "image": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/18/Pictures/_5fb51944-d2ee-11e8-841e-211dfd3178e1.jpg",
    "scores": [
        1,
        3,
        1,
        3,
        3,
        1,
        3,
        3,
        1,
        1   ]
    },{
    "name": "Magneto",
    "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/xmen-leader-magneto.jpg",
    "scores": [
        2,
        3,
        2,
        3,
        2,
        3,
        2,
        3,
        2,
        3   ]
    },{
    "name": "Spider Man",
    "image": "https://apollo2.dl.playstation.net/cdn/UP9000/CUSA02299_00/FREE_CONTENTlfrM9XqFMPLKmUpQpxJS/PREVIEW_SCREENSHOT3_163995.jpg",
    "scores": [
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5   ]
    }



],
    
    add: function(data){
        // console.log(data);
        console.log("You have submitted your profile info!");
        object.tableData.push(data);
    }

};

module.exports = object;