
 
 /*function f1(){
    
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
        ) }*/


 
 function f1(){
    
var api = 'https://cricapi.com/api/cricketScore/?unique_id=';
     var d = new Date();
     var uid;
var dd = d.getDate();
      if(dd==22 && d.getHours()>11){
        uid='1216496';
     }
     else if(dd==23 && d.getHours()>11){
        uid='1216508';
     }
     else if(dd==24 && d.getHours()>11){
        uid='1216510';
     }
     else if(dd==25 && d.getHours()>11){
        uid='1216539';
     }
     else if(dd==26 && d.getHours()>11){
        uid='1216545';
     }
     else if(dd==27 && d.getHours()>11){
        uid='1216527';
     }
     else if(dd==28 && d.getHours()>11){
        uid='1216547';
     }
     else if(dd==29 && d.getHours()>11){
        uid='1216532';
     }
     else if(dd==30 && d.getHours()>11){
        uid='1216504';
     }
     else if(dd==1 && d.getHours()>11){
        uid='1216503';
     }
     else if(dd==2 && d.getHours()>11){
        uid='1216516';
     }
     else if(dd==3 && d.getHours()<19 && d.getHours()>11){
        uid='1216514';
     }
     else if(dd==3 && d.getHours()>19){
        uid='1216515';
     }
     else if(dd==4 && d.getHours()<19 && d.getHours()>11){
        uid='1216538';
     }
     else if(dd==4 && d.getHours()>19){
        uid='1216513';
     }
     else if(dd==5 && d.getHours()>11){
        uid='1216519';
     }
     else if(dd==6 && d.getHours()>11){
        uid='1216511';
     }
      else if(dd==7 && d.getHours()>11){
        uid='1216501';
     }
      else if(dd==8 && d.getHours()>11){
        uid='1216542';
     }
      else if(dd==9 && d.getHours()>11){
        uid='1216500';
     }
      else if(dd==10 && d.getHours()<19 && d.getHours()>11){
        uid='1216523';
     }
      else if(dd==10 && d.getHours()>19){
        uid='1216525';
     }
      else if(dd==11 && d.getHours()<19 && d.getHours()>11){
        uid='1216507';
     } else if(dd==11 && d.getHours()>19){
        uid='1216529';
     }
     else if(dd==12 && d.getHours()>11){
        uid='1216540';
     }
     else if(dd==13 && d.getHours()>11){
        uid='1216528';
     }
     else if(dd==14 && d.getHours()>11){
        uid='1216543';
     }
     else if(dd==15 && d.getHours()>11){
        uid='1216531';
     }
     else if(dd==16 && d.getHours()>11){
        uid='1216526';
     }
      else if(dd==17 && d.getHours()<19 && d.getHours()>11){
        uid='1216522';
     }
      else if(dd==17 && d.getHours()>19){
        uid='1216509';
     }
      else if(dd==18 && d.getHours()<19){
        uid='1216512';
     }
      else if(dd==18 && d.getHours()<19 && d.getHours()>11){
        uid='1216517';
     }
     else if(dd==19 && d.getHours()>11){
        uid='1216533';
     }
     else if(dd==20 && d.getHours()>11){
        uid='1216546';
     }
     else if(dd==21 && d.getHours()>11){
        uid='1216594';
     } // schedule till 21 October 2020
     else uid="1216534";
     
var unique_id =uid;
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
  
  
