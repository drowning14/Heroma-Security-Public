import{config}from'dotenv';
import{Client,GatewayIntentBits}from'discord.js';
import{channelCreate}from"./actions/channelCreate.mjs";
import{deleteChannel}from'./actions/deleteChannel.mjs';
import{roleCreate}from'./actions/roleCreate.mjs';
import{roleDelete}from'./actions/roleDelete.mjs';
import{roleUpdate}from'./actions/roleUpdate.mjs';
import{guildMemberUpdate}from'./actions/guildMemberUpdate.mjs';
import{channelUpdate}from'./actions/channelUpdate.mjs';
import{guildBanAdd}from'./actions/guildBanAdd.mjs';
import{guildBanRemove}from'./actions/guildBanRemove.mjs';
const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildModeration]});
config();
const token = process.env.token;
client.on('ready',()=>{console.log(`%c${client.user.tag} is online`, 'color:green;');});
client.on('channelCreate',channel=>{channelCreate(channel)});
client.on('channelDelete',channel=>{deleteChannel(channel)});
client.on('channelUpdate',(oldChannel,newChannel)=>{channelUpdate(oldChannel,newChannel)});
client.on('roleCreate',role=>{roleCreate(role)});
client.on('roleDelete',role=>{roleDelete(role)});
client.on("roleUpdate",(oldRole,newRole)=>{roleUpdate(oldRole,newRole)});
client.on('guildMemberUpdate',(oldMember,newMember)=>{guildMemberUpdate(oldMember,newMember)});
client.on('guildBanAdd',banInfo=>{guildBanAdd(banInfo)});
client.on('guildBanRemove',unbanInfo=>{guildBanRemove(unbanInfo)});

client.login(token);