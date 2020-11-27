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
var t1=0;var t2=0; var t3=0; var t4=0; t5=0;var t6=0;t7=0;var i;
function fun4(){
    x= document.getElementById("qwe").value;
    console.log(x,'wd');
    if(x==1){
    var ar1=["A beautiful, smart, and loving person will be coming into your life.","A fresh start will put you on your way.","A pleasant surprise is waiting for you.","Distance yourself from the vain","Cannot predict now","At the touch of love, everyone becomes a poet"];
    if(t1==0){
    i=Math.floor(Math.random() * 6);t1=1}
    console.log(ar1);
    console.log(i ,ar1[i],'11');
    document.getElementById("s4").innerHTML=ar1[i]+".";
    }
    if(x==6){
       let ar2=["Better ask twice than lose yourself once","An inch of time is an inch of gold","An important person will offer you support","Adventure can be real happiness","A smooth long journey! Great expectations","A pleasant surprise is waiting for you","Cannot predict now"];
       if(t2==0){
        i=Math.floor(Math.random() * 7);t2=1;
       } 
       document.getElementById("s4").innerHTML=ar2[i]+".";
    }
    if(x==2){
       let ar3=["How you look depends on where you go","In order to take, one must first give","It is better to deal with problems before they arise","Like the river flow into the sea. Something are just meant to be","You will enjoy good health","Cannot predict now"];
       if(t3==0){
           t3=1;i=Math.floor(Math.random() * 6);
       }
       document.getElementById("s4").innerHTML=ar3[i]+".";
    }
    if(x==3){
        let ar4=["Your goal will be reached very soon","Your hard work will payoff today","Your ability is appreciated","You have had a good start. Work harder!","You are soon going to change your present line of work","You are offered the dream of a lifetime. Say yes!","Cannot predict now"]
        if(t7==0){
            t7=1;i=Math.floor(Math.random() * 6);
        } 
        document.getElementById("s4").innerHTML=ar4[i]+".";
    }
    if(x==4){
        let ar5=["You are busy, but you are happy","Time is precious, but truth is more precious than time","The harder you work, the luckier you get","The best prediction of future is the past","Soon life will become more interesting","Cannot predict now"];
        if(t4==0){
            t4=1;i=Math.floor(Math.random() * 6);
        }
        document.getElementById("s4").innerHTML=ar5[i]+".";
    }
    if(x==5){
        let ar6=["Put your mind into planning today. Look into the future","Perhaps you’ve been focusing too much on saving","Now is the time to go ahead and pursue that love interest!","Never fear! The end of something marks the start of something new","Living with a commitment to excellence shall take you far","Cannot predict now"];
        if(t5==0){
            t5=1;i=Math.floor(Math.random() * 6);
        } 
        document.getElementById("s4").innerHTML=ar6[i]+".";
    }
    if(x==7){
        let ar7=["Keep your face to the sunshine and you will never see shadows","If you look in the right places, you can find some good offerings","Happy life is just in front of you","From now on your kindness will lead you to success","Allow compassion to guide your decisions","Cannot predict now"]
        if(t6==0){
            t6=1;i=Math.floor(Math.random() * 6);
        }
        document.getElementById("s4").innerHTML=ar7[i]+".";
    }

}