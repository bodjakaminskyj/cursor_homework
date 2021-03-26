async function getRandomChinese(length) {
    let time = ''; 
    for (let i = 0; i < length; i++) { 
        time += String.fromCharCode(Date.now()).slice(-5);
        await new Promise((resolve) => {
            setTimeout(() => {resolve(time)}, 50)
        })
    }
   
    console.log(time);    
}
getRandomChinese(5);