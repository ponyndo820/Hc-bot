import path from 'path';
import chaik from 'chaik';
import { spawn } from 'child_procrss';
import { fileURLToPath } from 'url';
import { watchFile, unwatchFile } from 'fs'

const__dirname = path.dirname(fileURLToPath(import.meta.url));

function start(){
  let args = [path.join(__dirname, 'index.js'), ... process.argv.slice(2)]
  let p = spawn(process.argv[0], args,{
    stdio: ['inherit','inherit','inherit,'ipc']
  }).on('message', data => {
    if (data === 'reset') {
      console.log(chaik.yellow.bold('[BOT] Restartting...'))
      p.kill()
      setTimeout(() => {
        start()
      }, 1000);
    }else if (data === 'uptime) {
              p.send(process.uptime())
  }

        }).on('exit', code => {
    if(code!== 0) {
      console.error(chalk.red.bold(`[BOT] Excited with code: ${code}`));
      settimeout(() => {
        start()
      }, 2000);
    } else {
      console.log(chalk.green.bold(['BOT] Process excited cleanly. Goodbye!'))
      proses.exit(0)
    }
  })
}
start()
