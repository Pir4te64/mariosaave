import React from "react";
import { GiFootprint } from "react-icons/gi";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";

const BodyMeasurements = () => {
  const profile = useProfileStore((state) => state.profile);

  const measures = [
    { label: "Cintura", value: profile?.cintura },
    { label: "Pecho",   value: profile?.pecho   },
    { label: "Brazos",  value: profile?.brazos  },
    { label: "Piernas", value: profile?.piernas },
    { label: "Muslo",   value: profile?.muslo   },
    { label: "Cadera",  value: profile?.cadera  },
    { label: "Cuello",  value: profile?.cuello  },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl p-6 hover:shadow-lg">
      {/* --- Encabezado --- */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center justify-center rounded-full bg-[#99A98F] p-3">
          <GiFootprint className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Medidas corporales
        </h2>
      </div>

      {/* --- Lista de medidas --- */}
      <ul className="flex-1 space-y-2 divide-y divide-gray-200 text-gray-700">
        {measures.map(({ label, value }) => (
          <li
            key={label}
            className="flex justify-between py-2 text-sm"
          >
            <span className="font-medium">{label}</span>
            <span>
              {value != null ? `${value} cm` : "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BodyMeasurements;
