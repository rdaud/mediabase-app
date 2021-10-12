const doSomething = async () => {
    const sum1 =  await add(10,10)
    const sum2 =  await add(sum1,10)

    return sum2
}

const add = (a,b) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(a + b)
        },2000)
    })
}


doSomething().then(
    (result) => {
        console.log(result)
    }).catch( (e) => {
        console.log(e)
    })

