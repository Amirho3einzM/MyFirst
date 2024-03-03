function play()
{    var qry=document.getElementById("vid").value;    
if(qry==null)    {        alert("Enter URl First!")    }    
else    {        document.getElementById("player").src=qry;    }}
