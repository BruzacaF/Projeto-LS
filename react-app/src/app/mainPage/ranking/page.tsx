'use client';

import DataBase from '@/services/supabase';
import React, { useEffect, useState } from 'react';
import '@/components/css/ranking.css';
import PlayerTable from './PlayerTable';
import { Player } from './PlayerTable';


export default function RankingPage() {
  const [topPlayers, setTopPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTopPlayers = async () => {
    await DataBase.getTopPlayers();
    setTopPlayers(DataBase.topPlayers);
    setLoading(false);
    }

  useEffect(() => {
    fetchTopPlayers();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section>
      <h1>Ranking dos Jogadores</h1>
      <PlayerTable players={topPlayers} />
    </section>
  );
}