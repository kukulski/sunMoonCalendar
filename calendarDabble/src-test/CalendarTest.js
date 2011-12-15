var cal;
var calJSON;
var leapYearCal;
var leapJSON;

TestCase("CalendarTest", {
    setUp: function() {
       cal = this.calendar = new Calendar.Calendar(2011);
        leapYearCal = new Calendar.Calendar(2012);
        calJSON = cal.toJSON();
        leapJSON = leapYearCal.toJSON();
    },
    "test 365 days in 2011": function(){ assertEquals("365 days in the year",365,this.calendar.daysInYear);},
    "test global cal instance": function(){ assertEquals("365 days in the year",365,cal.daysInYear);},
       "test 366 days in 2012": function(){assertEquals(366,leapYearCal.daysInYear);},

    "test foo": function() { assertFalse(false);},
    "test month creation": function() {
        assertEquals(12,cal.monthLengths.length);
        assertEquals(29,leapYearCal.monthLengths[1])
        assertEquals(28,cal.monthLengths[1])
   },
    "test json": function() {
        assertEquals(12, calJSON.months.length);
        assertEquals(31, calJSON.months[1].start);
    },



    foo: 'bar'
});

