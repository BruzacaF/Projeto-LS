import React from 'react';

export interface Player {
  name: string;
  score: number;
}

interface PlayerTableProps {
  players: Player[];
}

export default function PlayerTable({ players }: PlayerTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Nome</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}