
var Calendar = {};
(function() {
//       Calendar.yearDayToMonthDay =  function (year, num) {
//
//        return Calendar.dayOfYear(year,num).getDate();
//
//    }
    Date.monthNames =  'January,February,March,April,May,June,July,August,September,October,November,December'.split(',');

    Date.fromYearAndDay = function(year,num) {
        var startOfYear = new Date(year,0,0);
        var offset = (num + .5)*24*60*60*1000;
        var rval =  new Date(startOfYear.getTime() + offset);
        rval.setHours(0);
        return rval;
    };

    Date.prototype.getMonthName = function () {
        var idx = this.getMonth();
        var rval = Date.monthNames[idx];
        return rval;
    }
    Date.prototype.getNumberOfDays = function () {


        var jan1 = this.jan1();
        var dec31 = this.dec31();
        var msecs = dec31.getTime() - jan1.getTime();
        return Math.round(msecs/(1000*24*60*60))+1;
    };
    Date.prototype.getDayOfYear = function() {
        var jan1 = this.jan1();
        var midnight = this.midnight();
        var elapsed = midnight.getTime() - jan1.getTime();
        return Math.round(elapsed/(1000*24*60*60));
    };

    Date.prototype.getFraction = function() {
        var day = this.getDayOfYear();
        var total = this.getNumberOfDays();
        return day/total;
    };
    Date.prototype.firstOfMonth = function() {
        return new Date(this.getYear(), this.getMonth(), 1);
    };

    Date.prototype.midnight = function() {
            var dayOfYear = new Date(this);
        dayOfYear.setHours(0);
        return dayOfYear;
    };
    Date.prototype.jan1 = function() {
        var rval = new Date(this);
        rval.setMonth(0);
        rval.setDate(1);
        rval.setHours(0,0,0);
      return rval;
    };
    Date.prototype.dec31 = function() {
       var rval = new Date(this);
        rval.setMonth(11);
        rval.setDate(31);
        rval.setHours(0,0,0);
      return rval;
    }
    Date.prototype.getNumberOfHours = function() {
       var dayOfYear = this.midnight();
       var midnightTime = dayOfYear.getTime();
       dayOfYear.setHours(12);
       var sinceMidnight = dayOfYear.getTime() - midnightTime;
        sinceMidnight /= 60*60*1000;
        return 12 + sinceMidnight;
    }

    Date.prototype.isDST = function() {
        var jan1 = this.jan1();
        var midnight = this.midnight();
        return jan1.getTimezoneOffset() != midnight.getTimezoneOffset();

    }
    Date.prototype.hoursArray = function() {
        var startTime = this.midnight().getTime();
        var startDate = this.getDate();
        var rval = [];
        var thisHour;
        while(true) {
            thisHour = new Date(startTime);
            thisDate = thisHour.getDate();
            if(thisDate != startDate) break;
              var theHour = thisHour.getHours()%12;
                               if(theHour == 0) theHour += 12;
            startTime += 1000*60*60;
            rval.push(theHour);
        }
        return rval;
    }

//   Calendar.Calendar = function() {
//       this.year = arguments.length ? arguments[0] : new Date().getFullYear();
//
//     //  var dayOneOfMonth = new Date(this.year,month,1);
//           var jan1 = new Date(this.year,0,1);
//           var nextYear = new Date(this.year +1,0,1);
//        this.millisecondsInYear = nextYear - jan1;
//       //    var millisecondsIntoYear = dayOneOfMonth - jan1;
//
//       const kHoursPerDay = 24;
//       var kMsecPerDay =  kHoursPerDay*60*60*1000;
//        var daysThisYear =  parseInt(this.millisecondsInYear /   kMsecPerDay);
//
//        if(daysThisYear != 365) {
//            this.daysInYear = 366;
//            this.monthLengths = this.leapYearMonths;
//        }
//
//       this.makeMonths();
//
//   };

//   Calendar.Calendar.prototype = {
//       daysInYear: 365,
//       monthNames: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
//       monthLengths:[31,28,21,30,31,30,31,31,30,31,30,31],
//       leapYearMonths:[31,29,21,30,31,30,31,31,30,31,30,31],
//       kMsecPerSecond : 1000,
//       kSecondsPerMinute: 60,
//       kMinutesPerHour: 60,
//       kHoursPerDay: 24,
//       makeMonths:function() {
//           var start = 0;
//            this.months = [];
//           for(var i = 0; i < 12; i++) {
//               var length = this.monthLengths [i];
//
//               this.months[i] = {
//                   start: start,
//                   length: length,
//                   name:this.monthNames[i]
//              };
//            start += length;
//           }
//        },
//        toJSON:function() {
//          return {months:this.months};
//
//
//
//
//           }
//
//
//   };



})();
