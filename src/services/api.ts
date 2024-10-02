import axios from 'axios';
import { Target } from '../interfaces/interfaces' 

const baseUrl = 'https://todo-caio.azurewebsites.net/api/';

const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (setTargets: React.Dispatch<React.SetStateAction<Target[] | undefined>>) => {
  try {
    const response = await requestBase.get('Targets');
    setTargets(response.data);
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export const postData = async () => {
  try {
    const response = await requestBase.post('targets', {
      title: 'Demo da aula',
      description: 'Mostrando como fazer um post com axios',
      isComplete: false,
      todo: []
    });
    console.log(response.data);
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};