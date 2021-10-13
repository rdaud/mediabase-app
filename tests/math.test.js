const addFunc = (a,b) => a + b


test('should sum two numbers', () => {

    const total = addFunc(10,5)

    expect(total).toBe(15)
})

