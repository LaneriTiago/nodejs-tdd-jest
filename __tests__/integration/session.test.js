const { User } = require ('../../src/app/models');


describe ('Authentication', () => {
    it ('Localizar o nome', async () => {
       const user = await User.create ({
           name: 'Tiago', 
           email: 'tiago.laneri93@gmail.com', 
           password_hash: '123456789'})
        console.log (user)

        expect (user.name).toBe('Tiago')
    })
})


// Exemplo da descrição do teste: A rota /authenticate deve retornar um token JWT quando for chamado com credenciais válidas
// Describe pode ter diversos "it" dentro. Funciona como uma categoria dos testes