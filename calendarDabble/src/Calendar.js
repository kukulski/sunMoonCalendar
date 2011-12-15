
var Calendar = {};
(function() {
   Calendar.Calendar = function() {
       this.year = arguments.length ? arguments[0] : new Date().getFullYear();

     //  var dayOneOfMonth = new Date(this.year,month,1);
           var jan1 = new Date(this.year,0,1);
           var nextYear = new Date(this.year +1,0,1);
        this.millisecondsInYear = nextYear - jan1;
       //    var millisecondsIntoYear = dayOneOfMonth - jan1;

       const kHoursPerDay = 24;
       var kMsecPerDay =  kHoursPerDay*60*60*1000;
        var daysThisYear =  parseInt(this.millisecondsInYear /   kMsecPerDay);

        if(daysThisYear != 365) {
            this.daysInYear = 366;
            this.monthLengths = this.leapYearMonths;
        }

       this.makeMonths();

   };

   Calendar.Calendar.prototype = {
       daysInYear: 365,
       monthNames: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
       monthLengths:[31,28,21,30,31,30,31,31,30,31,30,31],
       leapYearMonths:[31,29,21,30,31,30,31,31,30,31,30,31],
       kMsecPerSecond : 1000,
       kSecondsPerMinute: 60,
       kMinutesPerHour: 60,
       kHoursPerDay: 24,
       makeMonths:function() {
           var start = 0;
            this.months = [];
           for(var i = 0; i < 12; i++) {
               var length = this.monthLengths [i];

               this.months[i] = {
                   start: start,
                   length: length,
                   name:this.monthNames[i]
              };
            start += length;
           }
        },
        toJSON:function() {
          return {months:this.months};




           }
   };



})();