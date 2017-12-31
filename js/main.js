var main_name = new Array();
var obj = {};
$(".file-holder").change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(progressEvent){      
          // By lines
          var lines = this.result.split('\n');
          for(var line = 0; line < lines.length; line++){
            if (line == 0) {
              var array = lines[0].split(',');
              for(var index = 0; index < array.length; index++){
                // console.log(array[index]);
                obj[array[index]] = '';
              }
            } else {
              // console.log(obj);
              var item = lines[line].split(',');
              for(var index = 0; index < item.length; index++){
                obj[array[index]] = item[index];
              }
              $('.json').append( JSON.stringify(obj, null, 8));
            }
          }
          // for (let i = 0; i < main_name.length; i++) {
          //   console.log(main_name[i]);
          // }
        };
        reader.readAsText(file);
});
