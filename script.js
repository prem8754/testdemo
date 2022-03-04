//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:request a connection(which data you need to receive)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step03:sending a connection request
request.send();
//step04:once the data successfully received 
//from the server(200)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    // your code:

    let res=data.filter((ele)=>ele.region==="asia");
    console.log(res);

    //task2

    //let res =data.map((ele)=>ele.region==="asia");
    //console.log(res);


     
     
}


//3 print the sum of the total population of the Asia of region.


 









