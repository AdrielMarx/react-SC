import { addDoc, collection, doc, getDocs, deleteDoc, getDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "./config"

// O proósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas.

// => CRUD

// - adicionar uma nova tarefa (Creat)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)

// Criar uma referência para a coleção no Fistore
export const tarefasCol = collection(db, 'tarefas')

// Função assíncrona = que o resultado não é obtido de imediato.
// Haverá uma "espera"
export async function addTarefa(data) {
  // Essa função se comunica com o firestore, eniva os dados (data) e salva na coleçao indicada
  await addDoc(tarefasCol, data)
  // await é uma isntrução para esperar o resultado de addDoc
}

// export async function getTarefas() {
//   // Snapshot é o resultado da busca na coleção de tarefas
//   const snapshot = await getDocs(tarefasCol)
//   const tarefas = []

//   snapshot.forEach(doc => {
//     tarefas.push({...doc.data(), id: doc.id})
//   })

//   return tarefas
// }

export async function getTarefasUsuario(idUsuario) {
  // Filtrar as tarefas da coleção de acordo com o id do usuário
  const filter = query(tarefasCol, where('idUsuario', '==', idUsuario))
  const snapshot = await getDocs(filter)
  const tarefas = []

  snapshot.forEach(doc => {
    tarefas.push({...doc.data(), id: doc.id})
  })

  return tarefas
}

export async function deleteTarefa(id) {
  // Cria uma referência para o documento da coleção
  const tarefaDoc = doc(tarefasCol, id)
  // Deletar o documento da coleção de acordo com o id
  await deleteDoc(tarefaDoc)
}

export async function getTarefa(id) {
  // Cria uma referência para o documento da coleção
  const tarefaDoc = doc(tarefasCol, id)
  // Trazer as informações do documento
  const snapshot = await getDoc(tarefaDoc)

  return snapshot.data()
}

export async function updateTarefa(id, data) {
  const tarefasDoc = doc(tarefasCol, id)
  await updateDoc(tarefasDoc, data)
}