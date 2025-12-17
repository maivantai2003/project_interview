// services/SignalRService.ts
import * as signalR from "@microsoft/signalr";
import { config } from "../constant/config";

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${config.URL_HUB}/order-hub`)
  .withAutomaticReconnect()
  .build();

export const signalRService = {
  connection,
  start: () => connection.start(),
  stop: () => connection.stop(),
  on: connection.on.bind(connection),
};
