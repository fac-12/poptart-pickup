var request = (function () {
  function _request (method, url, data, cb) {
    var xhr = new XMLHttpRequest();
    var dataString = JSON.parse(data);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(null, JSON.parse(xhr.responseText));
        } else {
          cb(true);
        }
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dataString);
  };

  var get = function (url, cb) { _request('GET', url, null, cb); }

  return request = {
    get
      };

})();
