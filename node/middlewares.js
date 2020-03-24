//middleware pattern (chain of resposability)

const passo1 = (ctx, netx) => {
    ctx.valor1 = 'mid1',
    netx()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2',
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, ()=> execPasso(indice + 1))

    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(exec)


