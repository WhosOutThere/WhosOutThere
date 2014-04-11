//Test filtering friends from a list.
  test('addCityWithInvalidTime',function(){
    document.getElementById("time").value = "1200";
    equal(addCity(),false,"invalid time");   
  });

  test('addCityWithInvalidDate',function(){
    document.getElementById("date").value = "31/2/14";
    equal(addCity(),false,"invalid date");
  });