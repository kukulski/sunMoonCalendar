/**
 * Created by IntelliJ IDEA.
 * User: kukulski
 * Date: 11/22/11
 * Time: 2:14 PM
 * To change this template use File | Settings | File Templates.
 */
 var makeCalendarJSON;

(function() {

   var Calendar = {
       plainYear:[31,28,21,30,31,30,31,31,30,31,30,31],
       leapYear: [31,29,21,30,31,30,31,31,30,31,30,31]
       getFractionOfYearForMonth: function (month,year){
           var dayOneOfMonth = new Date(year,month,1);
           var jan1 = new Date(year,0,1);
           var nextYear = new Date(year +1,0,1);
           var millisecondsInYear = nextYear - jan1;
           var millisecondsIntoYear = dayOneOfMonth - jan1;
                     
           return mil
           
           var nextYear = new Date(year +1,0,1);

               var diff = nextYear - jan1;
               var dayCount =  diff / kMsecPerDay;
           
           
       }

  };
    const months = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',');

    const kMsecPerSEcond = 1000;
    const kSecondsPerMinute = 60;
    const kMinutesPerHour = 60;
    const kHoursPerDay = 24;
    const kMsecPerDay = kHoursPerDay * kMinutesPerHour * kSecondsPerMinute * kMsecPerSEcond;


  makeCalendarJSON = function() {
     var year = arguments.length ? arguments[0] : new Date().getFullYear();



      var jan1 = new Date(year,0,1);
      var nextYear = new Date(year +1,0,1);

      var millisecondsIntoYear = nextYear - jan1;
      var dayCount =  millisecondsIntoYear / kMsecPerDay;


      var dayOfWeek = jan1.getDay();
      var rval = {days:[], monthLengths:[]};
      var dayArray = rval.days;
      var monthArray = rval.monthLengths;

       for(i = 0; i < 12; i++) {
        monthArray[i] = {name:months[i], fractionOfYear:Calendar.getFractionOfYearForMonth(i,year)};
       }

      for(i = 0; i <= dayCount; i++) {
           days.push({dayOfYear:i, dayOfWeek: (i + dayOfWeek)%7, weekOfYear: Math.floor((i+dayOfWeek)/7)});
      }




  }


})(); // execute module