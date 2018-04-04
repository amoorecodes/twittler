

var translateTime = function(time) {
        var timeNow = new Date();
        var timeDif = parseInt((timeNow.getTime() - time)/(1000*60))%60;
        console.log(timeDif)
        if(timeDif < 60) {
        	return "Posted " + timeDif + ' minutes ago.';
        } else if (timeDif < 1440) {
        	return 'Posted ' + Math.floor(timeDif/60) + ' hours ago.';
        } else {
        	return 'Posted ' + Math.floor(timeDif/1440) + ' days ago.'
        }
      }
      console.log(translateTime(1522814269205));
