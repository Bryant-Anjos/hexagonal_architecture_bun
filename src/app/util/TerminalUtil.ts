import { terminal } from 'terminal-kit'

export default class TerminalUtil {
  static title(text: string) {
    terminal.clear()
    terminal.magenta(text + '\n')
    terminal.magenta('-'.repeat(text.length) + '\n')
  }

  static clear() {
    terminal.clear()
  }

  static showKeyValue(key: string, value: any) {
    terminal.yellow(key).green(value).white('\n')
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  static async selection(
    text: string,
    options: string[],
  ): Promise<[number, string]> {
    terminal.yellow('\n' + text)
    const response = await terminal.singleLineMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow('\n' + text)
    const response = await terminal.singleLineMenu(['Yes', 'No']).promise
    return response.selectedIndex === 0
  }

  static async waitEnter() {
    terminal.white('\nPress ENTER to continue...')
    await terminal.inputField({ echo: false }).promise
  }
}
