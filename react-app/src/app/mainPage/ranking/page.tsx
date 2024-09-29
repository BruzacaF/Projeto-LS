'use client';

import DataBase from '@/services/supabase';
import React, { useEffect, useState } from 'react';
import '@/components/css/ranking.css'; // Importa o CSS do componente
import Loading from '@/components/loadingComponent';

interface Player {
    name: string;
    score: number;
}

export default function Ranking() {
    const [topPlayers, setTopPlayers] = useState<Player[]>([]); // Define o tipo do estado
    const [loading, setLoading] = useState<boolean>(true); // Define o estado de loading

    const fetchTopPlayers = async () => {
        await DataBase.getTopPlayers(); // Chama a função para buscar os jogadores
        setTopPlayers(DataBase.topPlayers); // Armazena os jogadores no estado
        setLoading(false); // Define loading como false após buscar os jogadores
    };

    useEffect(() => {
        fetchTopPlayers(); // Chama a função ao montar o componente
    }, []);
    return (
        <div className="ranking">
            <h1 className='ranking-title'>Ranking</h1>
            <div className="ranking-content">
                {loading ? (
                    <Loading /> // Mostra uma mensagem de loading enquanto os dados são carregados
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topPlayers.map((player: Player, index: number) => (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
