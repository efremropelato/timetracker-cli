const {Command, flags} = require('@oclif/command')

class TagCommand extends Command {
  async run() {
    const {flags} = this.parse(TagCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from TAG`)
  }
}

TagCommand.description = `Describe the command here
...
Extra documentation goes here
`

TagCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TagCommand
