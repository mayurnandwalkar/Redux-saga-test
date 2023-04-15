import axios from "axios";

const config = {
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw',
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw',
  },
};
export const loadDataApi = async () =>
  await axios.get('https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/contractors',config);

export const updateDataApi = async (data) =>
    await axios.patch('https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1/contractors?id=eq.1',{name:data},config);