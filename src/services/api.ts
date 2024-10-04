import axios from 'axios';
import { Target, Todo } from '../interfaces/interfaces' 

const baseUrl = 'https://todo-caio.azurewebsites.net/api/';

const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (setTargets: React.Dispatch<React.SetStateAction<Target[]>>) => {
  try {
    const response = await requestBase.get('Targets');
    console.log('Resposta da API:', response.data);
    setTargets(response.data); 
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export const postTarget = async (title: string, description: string, isComplete: boolean) => {
  try {
    const response = await requestBase.post('Targets', {
      title: title,
      description: description,
      isComplete: isComplete,
      todos: [] 
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar target:', error);
    throw error; 
  }
};

export const deleteTarget = async (id: number) => {
  try {
    await requestBase.delete(`Targets/${id}`);
    console.log(`Target com id ${id} deletado com sucesso!`);
  } catch (error) {
    console.error('Erro ao deletar target:', error);
    throw error;
  }
};

export const addTodoToTarget = async (targetId: number, todo: Todo) => {
  try {
    const response = await requestBase.post(`Targets/${targetId}/todos`, todo);
    return response.data; // Retorna o novo Todo adicionado
  } catch (error) {
    console.error('Erro ao adicionar todo ao target:', error);
    throw error;
  }
};