var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Just jerking baby <3",
assets : {
large_image : "xd",
large_text : "Jerking baby"
},
buttons : [{label : "Instagram" , url : "https://instagram.com/iammaldin5"}]
}
})
})
client.login({ clientId : "822199997147775038" }).catch(console.error);