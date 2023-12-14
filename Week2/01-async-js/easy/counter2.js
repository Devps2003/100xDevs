let cnt =0;
function timeonesec(){
    setTimeout(()=>{
        count();
    },1000);
}
function count(){
    console.log(cnt);
    cnt++;
    
    
    timeonesec();
}
count();