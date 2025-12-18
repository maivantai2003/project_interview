import * as signalR from "@microsoft/signalr";
import { config } from "../constant/config";

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${config.URL_HUB}/order-hub`)
  .withAutomaticReconnect()
  .build();

const start = async () => {
  if (connection.state === signalR.HubConnectionState.Disconnected) {
    await connection.start();
    console.log("✅ SignalR connected");
  }
};

const stop = async () => {
  if (connection.state === signalR.HubConnectionState.Connected) {
    await connection.stop();
    console.log("🛑 SignalR stopped");
  }
};

export const signalRService = {
  connection,
  start,
  stop,
  on: connection.on.bind(connection),
  off: connection.off.bind(connection),
};
