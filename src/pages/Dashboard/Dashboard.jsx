import React, { useMemo } from 'react';
import GreetingCard from '@/pages/Dashboard/Dash/GreetingCard';
import PesoCard from '@/pages/Dashboard/Dash/PesoCard';
import Grasa from '@/pages/Dashboard/Dash/GrasaCorporal';
import BodyMeasurements from '@/pages/Dashboard/Dash/BodyMeasurements';
import MiComponenteProgreso from '@/pages/Dashboard/Dash/MiComponenteProgreso';
import UserProfileSidebar from './Dash/UserProfileSidebar ';

const Dashboard = () => {
  // orden de las tarjetas: Peso, Grasa, Medidas, Progreso
  const cards = useMemo(
    () => [
      { key: 'peso', Comp: PesoCard },
      { key: 'grasa', Comp: Grasa },
      { key: 'medidas', Comp: BodyMeasurements },
      { key: 'progreso', Comp: MiComponenteProgreso },
    ],
    []
  );

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-100 p-6 lg:flex-row">
      {/* MAIN: 2 columnas en sm+ */}
      <main className="grid w-full auto-rows-min grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:flex-1">
        {/* Greeting: ocupa ambas columnas */}
        <div className="col-span-full">
          <GreetingCard />
        </div>

        {/* Mapeo de las 4 tarjetas */}
        {cards.map(({ key, Comp }, idx) => (
          <div
            key={key}
            className="h-full rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            {/* Para Progreso pasamos el onClick si lo necesitas */}
            {key === 'progreso' ? (
              <Comp onClick={() => {/* tu handler */}} />
            ) : (
              <Comp />
            )}
          </div>
        ))}
      </main>

      {/* SIDEBAR: full width en móvil, ancho fijo en lg */}
      <aside className="w-full lg:w-80">
        <UserProfileSidebar />
      </aside>
    </div>
  );
};

export default Dashboard;
