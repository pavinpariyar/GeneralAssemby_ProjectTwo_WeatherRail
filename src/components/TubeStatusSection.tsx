// src/components/TubeStatusSection.tsx
import React, { useState, useEffect } from 'react';
import { fetchTubeStatus, LineStatus } from '../services/tubeApi';

const TubeStatusSection: React.FC = () => {
  const [status, setStatus] = useState<LineStatus[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTubeStatus();
        setStatus(data);
      } catch (error) {
        setError('Failed to fetch tube status.');
        console.error(error);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!status) {
    return <div>Loading Tube status...</div>;
  }

//   return (
//     <div>
//       <h2 className="title">Tube Status</h2>
//       {status.map((line) => (
//         <div key={line.id}>
//           <strong>{line.name}</strong>: {line.lineStatuses[0].statusSeverityDescription}
//           {line.lineStatuses[0].reason && <p>Reason: {line.lineStatuses[0].reason}</p>}
//         </div>
//       ))}
//     </div>
//   );
  // };
  
  return (
    <div>
      <h2 className="title">Tube Status</h2>
      {status.map((line) => (
        <div key={line.id} className={`tube-line ${line.name.replace(/ & /g, '-')}`}>
          {line.name}: {line.lineStatuses[0].statusSeverityDescription}
        </div>
      ))}
    </div>
  );
};



export default TubeStatusSection;