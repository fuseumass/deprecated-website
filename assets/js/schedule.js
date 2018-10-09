var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }


var xhr = new XMLHttpRequest();
xhr.open('GET', "https://dashboard.hackumass.com/events.json", true);
xhr.send();
xhr.onreadystatechange = processRequest;

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        
        // Step one, remove the data we don't care about
        for(var i=0; i < data.length; i++){
            delete data[i]["created_by"];
            delete data[i]["created_at"];
            delete data[i]["updated_at"];
            delete data[i]["url"];
            delete data[i]["id"];
            date1 = new Date(data[i]["start_time"]);
            // date1.setHours(date1.getHours() - 4);
            date1 = formatDate(date1);
            data[i]["start_time"] = date1.toString();
            date2 = new Date(data[i]["end_time"]);
            // date2.setHours(date2.getHours() - 4)
            date2 = formatDate(date2);
            data[i]["end_time"] = date2.toString();
        }

        document.body.appendChild(buildHtmlTable(data));
    } else if  (xhr.status == 404 || xhr.status == 500 ) {
        console.log('Shit... The request failed...')
    }
}

