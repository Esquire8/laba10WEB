function Summ(){
    let number = 5;
    setInterval(() => {
        console.log(number);
        number+=5;
    }, 2000);
}

setTimeout(Summ,2000)