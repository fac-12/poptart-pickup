// ------- EVENT LISTENER ------- //
// output : input.value (text from field)
var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-data');

input.addEventListener('keypress', function(event) {
  var inputStr = event.target.value;
  var code = event.keyCode;
  request("flavours?inputStr=" + inputStr + "&keycode=" + code);
});

// ------- RENDER TO DOM ------- //
// input : JSON object - should add <option> inside datalist

// var testObj = {
//   "items": [{
//       "id": 3845,
//       "title": "Blue Raspberry",
//       "url": "http://poptarts.wikia.com/wiki/Blue_Raspberry",
//       "ns": 0,
//       "quality": 0
//     },
//     {
//       "id": 2066,
//       "title": "Frosted Chocolate Fudge",
//       "url": "http://poptarts.wikia.com/wiki/Frosted_Chocolate_Fudge",
//       "ns": 0,
//       "quality": 29
//     },
//     {
//       "id": 2430,
//       "title": "Frosted Lava Berry Explosion",
//       "url": "http://poptarts.wikia.com/wiki/Frosted_Lava_Berry_Explosion",
//       "ns": 0,
//       "quality": 12
//     }
//   ]
// }

function renderData(responseObj) {
  (responseObj.items).forEach((item) => {
    console.log(item.title);
    var option = document.createElement('option');
    option.value = item.title;
    datalist.appendChild(option);
  })
  console.log("render");
}
renderData(responseObj)

// ------- CALL REQUEST ------- //
// url = 'flavours'
// calls render with filtered JSON object
