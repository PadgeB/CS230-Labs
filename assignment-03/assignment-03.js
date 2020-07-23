/* function that calculates the average of assignments added to row 1,
sets cell back to 0 if over 100 and changes colour of average cell to red and text to white if below 60.
This function is repeated fir each row*/ 
function getAverageRow1(){ 
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =1;i<2;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){ //if its not NaN then add it to sum
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="#B0B0B0"; // change the background colour to the rows default to indicate that its now a valid input
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0; //set average to be sum/numbers of if theres is no sum/numbers then set it to 0
        

        //if statements for changing result box background colour and text colour
        if(average==0){
            result.style.backgroundColor="#B0B0B0"; 
            result.style.color="black";
        }
        else if(average<60){
            result.style.backgroundColor="red";
            result.style.color="white";
        }

        else if(average>59){
            result.style.backgroundColor="#B0B0B0";
            result.style.color="black";
        }

        


        rows[1].cells[7].innerHTML="<td>"+Math.round(average)+ "%"+"</td>"; //setting result box to equal average


        document.getElementById("switch").onclick=function(){ //This was a test that i never completed to check if on click works inside another function
            //result.style.backgroundColor="black";
            rows[1].cells[7].innerHTML="<td>"+Math.round(average)+ "****"+"</td>";
        }


        

       
        
    }

}

//Each function after this is a repeat of 1
function getAverageRow2(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =2;i<3;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="white";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result1.style.backgroundColor="white";
            result1.style.color="black";
        }
        else if(average<60){
            result1.style.backgroundColor="red";
            result1.style.color="white";
        }

        else if(average>59){
            result1.style.backgroundColor="white";
            result1.style.color="black";
        }

        
        
        rows[2].cells[7].innerHTML="<td>"+Math.round(average)+"%"+"</td>";

       
    }

}


function getAverageRow3(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =3;i<4;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="#B0B0B0";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result2.style.backgroundColor="#B0B0B0";
            result2.style.color="black";
        }
        else if(average<60){
            result2.style.backgroundColor="red";
            result2.style.color="white";
        }

        else if(average>59){
            result2.style.backgroundColor="#B0B0B0";
            result2.style.color="black";
        }

        
        
        rows[3].cells[7].innerHTML="<td>"+Math.round(average)+"%"+"</td>";

       
    }

}

function getAverageRow4(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =4;i<5;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="white";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result3.style.backgroundColor="white";
            result3.style.color="black";
        }
        else if(average<60){
            result3.style.backgroundColor="red";
            result3.style.color="white";
        }

        else if(average>59){
            result3.style.backgroundColor="white";
            result3.style.color="black";
        }
        
        
        rows[4].cells[7].innerHTML="<td>"+Math.round(average)+ "%"+"</td>";

       
    }

}

function getAverageRow5(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =5;i<6;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="#B0B0B0";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result4.style.backgroundColor="#B0B0B0";
            result4.style.color="black";
        }
        else if(average<60){
            result4.style.backgroundColor="red";
            result4.style.color="white";
        }

        else if(average>59){
            result4.style.backgroundColor="#B0B0B0";
            result4.style.color="black";
        }
        
        
        rows[5].cells[7].innerHTML="<td>"+Math.round(average)+"%"+"</td>";

       
    }

}

function getAverageRow6(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =6;i<7;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="white";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result5.style.backgroundColor="white";
            result5.style.color="black";
        }
        else if(average<60){
            result5.style.backgroundColor="red";
            result5.style.color="white";
        }

        else if(average>59){
            result5.style.backgroundColor="white";
            result5.style.color="black";
        }
        
        rows[6].cells[7].innerHTML="<td>"+Math.round(average)+ "%"+"</td>";

       
    }

}

function getAverageRow7(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =7;i<8;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="#B0B0B0";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result6.style.backgroundColor="#B0B0B0";
            result6.style.color="black";
        }
        else if(average<60){
            result6.style.backgroundColor="red";
            result6.style.color="white";
        }

        else if(average>59){
            result6.style.backgroundColor="#B0B0B0";
            result6.style.color="black";
        }
        
        
        rows[7].cells[7].innerHTML="<td>"+Math.round(average)+ "%"+"</td>";

       
    }

}


function getAverageRow8(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =8;i<9;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="white";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result7.style.backgroundColor="white";
            result7.style.color="black";
        }
        else if(average<60){
            result7.style.backgroundColor="red";
            result7.style.color="white";
        }

        else if(average>59){
            result7.style.backgroundColor="white";
            result7.style.color="black";
        }
        
        
        rows[8].cells[7].innerHTML="<td>"+Math.round(average)+"%"+ "</td>";

       
    }

}

function getAverageRow9(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =9;i<10;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="#B0B0B0";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result8.style.backgroundColor="#B0B0B0";
            result8.style.color="black";
        }
        else if(average<60){
            result8.style.backgroundColor="red";
            result8.style.color="white";
        }

        else if(average>59){
            result8.style.backgroundColor="#B0B0B0";
            result8.style.color="black";
        }
        
        
        rows[9].cells[7].innerHTML="<td>"+Math.round(average)+"%"+ "</td>";

       
    }

}

function getAverageRow10(){
    var table=document.getElementById("grades");
    var rows=table.rows;

    for (var i =10;i<11;i++){
        var cells = rows[i].cells;
        var sum=0;
        var numbers=0;
        for (var x =2; x <(cells.length -1); x++){
            var cell=cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)){
                sum+=add;
                numbers++;
                
                cell.style.backgroundColor="white";
            }
           else if (cell.innerHTML="-"){
           cell.style.backgroundColor="yellow";
           
           }
           if(add>100){
            cell.innerHTML="-";
           }
        }
        var average=sum / numbers || 0;
        
        if(average==0){
            result9.style.backgroundColor="white";
            result9.style.color="black";
        }
        else if(average<60){
            result9.style.backgroundColor="red";
            result9.style.color="white";
        }

        else if(average>59){
            result9.style.backgroundColor="white";
            result9.style.color="black";
        }
        
        
        rows[10].cells[7].innerHTML="<td>"+Math.round(average)+"%"+"</td>";

       
    }
    
}

//function to call each average function automatically
(function getAverage(){
    getAverageRow1();
    getAverageRow2();
    getAverageRow3();
    getAverageRow4();
    getAverageRow5();
    getAverageRow6();
    getAverageRow7();
    getAverageRow8();
    getAverageRow9();
    getAverageRow10();
    setTimeout(arguments.callee,10);
}())





