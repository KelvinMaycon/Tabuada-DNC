function tabuada(){
    let num = document.getElementById('num')
    let end = document.getElementById('end') 
    if(num.value.length == 0 || end.value.length == 0){
        alert('Preencha os campos')
    }else{
        let n = Number(num.value)
        let e = Number(end.value)
        let x = 0
        let r = ('')
        let res = document.getElementById('resposta')
        res.innerHTML = `A tabuada de ${n} é: <br>`
        do{
            r = n*x
            res.innerHTML += `${x} x ${n} = ${r} <br>`
            x++
        } while(x <= e)
    }
}