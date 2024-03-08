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
    return <div className="notification is-danger">Error: {error}</div>;
  }

  if (!status) {
    return <div className="notification is-info">Loading Tube status...</div>;
  }

  return (
    <div className="box">
      <h2 className="title has-text-centered is-size-1 has-text-weight-bold">Underground Tube Status</h2>
      {status.map((line) => (
        <div key={line.id} className="is-flex is-justify-content-center is-align-items-center my-2">
          <div className={`tube-line ${line.name.replace(/ & /g, '-')}`}>
            {line.name}
          </div>
          <span className={`tag animate__animated animate__hover animate__pulse status-hover ${line.lineStatuses[0].statusSeverity === 10 ? 'is-success' : 'is-warning'}`}>
            {line.lineStatuses[0].statusSeverityDescription}
          </span>
        </div>
      ))}
      
      <a href="https://tfl.gov.uk/tfl/syndication/widgets/tubemap/default-search.html" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-bottom-right text-gray-400 text-2xl cursor-pointer is-fixed-bottom is-pulled-right" data-id="76"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>
      </a>
    </div>
  );
};

export default TubeStatusSection;
