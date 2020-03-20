const {Command, flags} = require('@oclif/command')
const userHome = require('user-home')
const sparkly = require('sparkly')
const Table = require('cli-table')
const chart = require('chart')
const clear = require('clear')

class GraphCommand extends Command {
  async run() {
    const {flags} = this.parse(GraphCommand)
    clear()
    switch (flags.type) {
    case 'home':
      this.log(`user home => ${userHome}`)
      break
    case 'sparkly':
      this.log(sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'}))
      break
    case 'table':
      const table = new Table({
        head: ['TH 1 label', 'TH 2 label'],
        colWidths: [100, 200],
      })
      table.push(
        ['First value', 'Second value']
        , ['First value', 'Second value'],
      )
      this.log(table.toString())
      break
    case 'chart':
      var data = [
        1,
        5,
        5,
        13,
        3,
        2,
        0,
        2,
        34,
        22,
        15,
        12,
        8,
        4,
        3,
        6,
        18,
        -5,
        -15,
        -11,
        -23,
        -3,
        10,
        18,
        23,
        17,
        4,
        5,
        6,
        3,
        12,
        10,
        7,
        -4,
        17,
        30,
        27,
        25,
        23,
        16,
        14,
        12,
        8,
        6,
        4,
        2,
      ]
      clear()
      this.log(chart(data, {
        width: 130,
        height: 30,
        pointChar: '█',
        negativePointChar: '░',
      }))
      break
    default:
      const name = flags.name || 'world'
      this.log(`hello ${name} from GRAPH`)
      break
    }
  }
}

GraphCommand.description = `Describe the command here
...
Extra documentation goes here
`

GraphCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
  type: flags.string({char: 't', description: 'type to print'}),
}

module.exports = GraphCommand
