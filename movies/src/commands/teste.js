// exemplo de comando com parametro: movies teste 3 5 --funcao=soma

const command = {
    name: 'teste',
    run: async toolbox => {
      const { print, parameters } = toolbox

      if (parameters.options.funcao == 'soma') {
          print.success(`A soma é: ${parameters.first + parameters.second}`)
      }
  
      print.info('Welcome to your CLI')
    }
  }
  
  module.exports = command
  