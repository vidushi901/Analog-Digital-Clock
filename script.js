function displayTime(){
    dt=new Date();
    hr=dt.getHours();
    min=dt.getMinutes();
    sec=dt.getSeconds();
    if(hr<10)
    {
        hr="0"+hr;
    }
    if(min<10)
    {
        min="0"+min;
    }
    
    if(sec<10)
    {
        sec="0"+sec;
    }
    document.getElementById('hr1').innerHTML = hr;
    document.getElementById('min1').innerHTML = min;
    document.getElementById('sec1').innerHTML = sec;
}
 setInterval(displayTime,  1000);

 var toggleSwitch = document.querySelector('input[type="checkbox"]');
 checkbox.addEventListener('change', function() {
    if (this.checked) {
        text1.style.display = "none";
        container1.style.display="none";
        text2.style.display= "block";
        container2.style.display="block";

    } else {
        text2.style.display = "none";
        container2.style.display="none";
        text1.style.display= "block";
        container1.style.display="grid";
    }
  });
  setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    console.log(d);

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

  
