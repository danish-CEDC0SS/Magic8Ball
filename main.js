function fun1(){
    var x= document.getElementById("end1");
    x.style.display="none";
    x= document.getElementById("start1");
    x.style.display="block";
    console.log("qaewrw");
    x=document.getElementById("name").value;
    document.getElementById("q1").innerHTML=x;
}
function fun2(){
    x= document.getElementById("start1");
    x.style.display="none";
    x= document.getElementById("s2");
    x.style.display="block";
}
function fun3(){
    x= document.getElementById("start1");
    x.style.display="none";
    x= document.getElementById("s3");
    x.style.display="block";
}
var t1=20;var t2=20; var t3=20; var t4=20; t5=20;var t6=20;t7=20;var i;
function fun4(){ 
            document.getElementById('hide').style.display='block';
            document.getElementById('s4').style.display='none';
            setTimeout("document.getElementById('hide').style.display='none';",1500);
            setTimeout("document.getElementById('s4').style.display='block';",1500);
    x= document.getElementById("qwe").value;
    console.log(x,'wd');
    if(x==1){
    var ar1=["A beautiful, smart, and loving person will be coming into your life.","A fresh start will put you on your way.","A pleasant surprise is waiting for you.","Distance yourself from the vain","Cannot predict now","At the touch of love, everyone becomes a poet"];
    if(t1==20){
    i=Math.floor(Math.random() * 6);t1=i}
    document.getElementById("s4").innerHTML=ar1[t1]+".";
    }
    if(x==6){
       let ar2=["Better ask twice than lose yourself once","An inch of time is an inch of gold","An important person will offer you support","Adventure can be real happiness","A smooth long journey! Great expectations","A pleasant surprise is waiting for you","Cannot predict now"];
       if(t2==20){
        i=Math.floor(Math.random() * 6);t2=i;
       } 
       document.getElementById("s4").innerHTML=ar2[t2]+".";
    }
    if(x==2){
       let ar3=["How you look depends on where you go","In order to take, one must first give","It is better to deal with problems before they arise","Like the river flow into the sea. Something are just meant to be","You will enjoy good health","Cannot predict now"];
       if(t3==20){
         console.log(t3,'t3');
           i=Math.floor(Math.random() * 6);t3=i;
       } console.log(i,'i3');
       document.getElementById("s4").innerHTML=ar3[t3]+".";
    }
    if(x==3){
        let ar4=["Your goal will be reached very soon","Your hard work will payoff today","Your ability is appreciated","You have had a good start. Work harder!","You are soon going to change your present line of work","You are offered the dream of a lifetime. Say yes!","Cannot predict now"]
        if(t7==20){
            i=Math.floor(Math.random() * 6);t7=i;
        } 
        document.getElementById("s4").innerHTML=ar4[t7]+".";
    }
    if(x==4){
        let ar5=["You are busy, but you are happy","Time is precious, but truth is more precious than time","The harder you work, the luckier you get","The best prediction of future is the past","Soon life will become more interesting","Cannot predict now"];
        if(t4==20){
            i=Math.floor(Math.random() * 6);t4=i;
        }
        document.getElementById("s4").innerHTML=ar5[t4]+".";
    }
    if(x==5){
        let ar6=["Put your mind into planning today. Look into the future","Perhaps you’ve been focusing too much on saving","Now is the time to go ahead and pursue that love interest!","Never fear! The end of something marks the start of something new","Living with a commitment to excellence shall take you far","Cannot predict now"];
        if(t5==20){
            i=Math.floor(Math.random() * 6);t5=i;
        } 
        document.getElementById("s4").innerHTML=ar6[t5]+".";
    }
    if(x==7){
        let ar7=["Keep your face to the sunshine and you will never see shadows","If you look in the right places, you can find some good offerings","Happy life is just in front of you","From now on your kindness will lead you to success","Allow compassion to guide your decisions","Cannot predict now"]
        if(t6==20){
            i=Math.floor(Math.random() * 6);t6=i;
        }
        document.getElementById("s4").innerHTML=ar7[t6]+".";
    }


}



function fun5(){
    x= document.getElementById("s2");
    x.style.display="none";
    x= document.getElementById("s3");
    x.style.display="block";
}
