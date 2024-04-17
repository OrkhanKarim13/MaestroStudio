// import { reactive } from "vue";
const notifications = reactive([])

const addNotification = ({message, timeout = 5, type = 'info' }) => {
  const id = Math.random() + Date.now()
  notifications.push({
    id,
    message,
    type
  })
  if(timeout) {
    setTimeout(() => removeNotification(id), timeout * 1000)
  }
}

const removeNotification = (id) => {
  const index = notifications.findIndex(item => item.id === id)
  notifications.splice(index, 1)
} 

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification
  }
}