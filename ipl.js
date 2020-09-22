
 
 function f1(){
    
var api = 'https://cricapi.com/api/cricketScore/?unique_id=';
var unique_id ='1216496';
var api_key = '&apikey=iiTJE2MoKMfHgUhMVm3E3QofjAB3';
var url = api + unique_id + api_key;
        fetch(url).then(
            res=>{
                res.json().then(
                    data=>{
                        
                     console.log(data);
                    
                         var temp="";

                        
                             
                             temp+="<tr class='table-success'>";
                           temp+="<td>"+data["team-1"]+" vs "+data["team-2"]+"</td>";
                                temp+="<td>"+data.stat+"</td>";
                            if(data.matchStarted == true)
                             temp+="<td>"+data.score+"</td>";
                            else 
                             temp+="<td>"+'Match Not Started Yet'+"</td>";
                             
                           temp+="</tr>"
                           

                      

                        
                         document.getElementById("data").innerHTML += temp;
                  
                      
                    
                    }
                )
            }
        ) }
  
