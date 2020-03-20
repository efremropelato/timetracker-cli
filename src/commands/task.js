const {Command, flags} = require('@oclif/command')

class TaskCommand extends Command {
  async run() {
    const {flags} = this.parse(TaskCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from TASK`)
  }
}

TaskCommand.description = `Describe the command here
...
Extra documentation goes here
`

TaskCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TaskCommand
