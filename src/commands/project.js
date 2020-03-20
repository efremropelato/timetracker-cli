const {Command, flags} = require('@oclif/command')

class ProjectCommand extends Command {
  async run() {
    const {flags} = this.parse(ProjectCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from PROJECT`)
  }
}

ProjectCommand.description = `Describe the command here
...
Extra documentation goes here
`

ProjectCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ProjectCommand
