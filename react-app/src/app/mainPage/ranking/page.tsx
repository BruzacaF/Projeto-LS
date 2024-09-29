'use client';

import DataBase from '@/services/supabase';
import React, { useEffect, useState } from 'react';
import '@/components/css/ranking.css'; // Importa o CSS


interface Player {
    name: string;
    score: number;
}

const RankingPage: React.FC = () => {
    const [topPlayers, setTopPlayers] = useState<Player[]>([]); // Define o tipo do estado

    const fetchTopPlayers = async () => {
        await DataBase.getTopPlayers(); // Chama a função para buscar os jogadores
        setTopPlayers(DataBase.topPlayers); // Armazena os jogadores no estado
    };

    useEffect(() => {
        fetchTopPlayers(); // Chama a função ao montar o componente
    }, []);

    return (
            <div>
                <h1>Ranking dos Jogadores</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Nome</th>
                            <th>Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topPlayers.map((player, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default RankingPage;
