const goFunction = () => {
    const divWeek = document.querySelectorAll('.div')
    const weekday = document.getElementById('list-week-input');
    const day = document.getElementById('day');


    let dayweek = 0;
    let total = 0;


    
    if(day.value ===""||weekday.value === ""){
        alert('day')
    } else{
        divWeek.forEach((day,index) => {
            if(weekday.value === day.textContent) {
                dayweek = index;
            }
        })
        total = dayweek + Number(day.value)
        divWeek.forEach((div)=>{
            div.classList.remove('selected')
        })
        switch(total%7) {
            case 0:
                divWeek[0].classList.add('selected');
                break;
            case 1:
                divWeek[1].classList.add('selected');
                break;
            case 2:
                divWeek[2].classList.add('selected');
                break;
            case 3:
                divWeek[3].classList.add('selected');
                break;
            case 4:
                divWeek[4].classList.add('selected');
                break;
            case 5:
                divWeek[5].classList.add('selected');
                break;
            case 6:
                divWeek[6].classList.add('selected');
                break;                    
    
        }
    }
}