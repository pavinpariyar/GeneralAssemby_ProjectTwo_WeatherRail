import axios from 'axios';

export interface LineStatus {
  id: string;
  name: string;
  lineStatuses: [{
    statusSeverity: number;
    statusSeverityDescription: string;
    reason?: string;
  }];
}

const TUBE_STATUS_API_URL = 'https://api.tfl.gov.uk/line/mode/tube/status';

export const fetchTubeStatus = async (): Promise<LineStatus[]> => {
  try {
    const response = await axios.get<LineStatus[]>(TUBE_STATUS_API_URL);
    return response.data; // Axios automatically parses the JSON response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle HTTP error responses from Axios requests
      console.error('Axios error fetching tube status:', error.response?.data || error.message);
    } else {
      // Handle unexpected errors
      console.error('Unexpected error fetching tube status:', error);
    }
    throw error; // Re-throwing the error to be handled by the caller
  }
};