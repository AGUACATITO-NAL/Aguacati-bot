
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["bot", "bott"])}.mp3`

conn.sendButton(m.chat, `Hola ππ» soy AGUACATIBOT π§π»βπ» ${name} \n \nClick en las siguientes opciones parΓ‘ ver mis comandos ππ» π€ \n`, igfg, null, [
      ['β¦β° Menu', '/help'],
      ['β¦β° Menu 2', '/menu2'],
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
