import{handleEvent}from"./handleEvent.mjs";
import{AuditLogEvent} from "discord.js";
export async function deleteChannel(channel) {
  await handleEvent(channel.guild,AuditLogEvent.ChannelDelete,channel);
}