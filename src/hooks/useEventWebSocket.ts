import { useState, useEffect, useRef, useCallback } from "react";
import { WS_URL, EVENT_ID } from "@/lib/api";

interface Team {
  [key: string]: unknown;
}

interface EventState {
  [key: string]: unknown;
}

export function useEventWebSocket() {
  const [teamScores, setTeamScores] = useState<Record<string, number> | null>(null);
  const [playerScores, setPlayerScores] = useState<Record<string, number> | null>(null);
  // Per-game scores: { gameId: { teamName/uuid: score } }
  const [perGameTeamScores, setPerGameTeamScores] = useState<Record<string, Record<string, number>> | null>(null);
  const [perGamePlayerScores, setPerGamePlayerScores] = useState<Record<string, Record<string, number>> | null>(null);
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [eventState, setEventState] = useState<EventState | null>(null);
  const [connected, setConnected] = useState(false);

  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);
  const backoffRef = useRef(1000);

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN || ws.current?.readyState === WebSocket.CONNECTING) return;

    try {
      const url = `${WS_URL}?event=${EVENT_ID}`;
      const socket = new WebSocket(url);
      ws.current = socket;

      socket.onopen = () => {
        setConnected(true);
        backoffRef.current = 1000;
      };

      socket.onclose = () => {
        setConnected(false);
        ws.current = null;
        if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
        
        reconnectTimeout.current = setTimeout(() => {
          backoffRef.current = Math.min(backoffRef.current * 2, 30000);
          connect();
        }, backoffRef.current);
      };

      socket.onerror = () => {
        socket.close();
      };

      socket.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          
          if (msg.eventId !== EVENT_ID) return;

          switch (msg.type) {
            case "SCORE_UPDATE":
              if (msg.data.teamScores) setTeamScores(msg.data.teamScores);
              if (msg.data.playerScores) setPlayerScores(msg.data.playerScores);
              if (msg.data.perGameTeamScores) setPerGameTeamScores(msg.data.perGameTeamScores);
              if (msg.data.perGamePlayerScores) setPerGamePlayerScores(msg.data.perGamePlayerScores);
              break;
            case "TEAM_UPDATE":
              if (msg.data.teams) setTeams(msg.data.teams);
              break;
            case "EVENT_STATE":
              if (msg.data) setEventState(msg.data);
              break;
          }
        } catch (e) {
          console.error("Error parsing WS message", e);
        }
      };
    } catch (e) {
      console.error("Error connecting to WS", e);
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
      reconnectTimeout.current = setTimeout(() => {
        backoffRef.current = Math.min(backoffRef.current * 2, 30000);
        connect();
      }, backoffRef.current);
    }
  }, []);

  useEffect(() => {
    connect();
    return () => {
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
      if (ws.current) {
        ws.current.close();
        ws.current = null;
      }
    };
  }, [connect]);

  return { teamScores, playerScores, perGameTeamScores, perGamePlayerScores, teams, connected, eventState };
}

