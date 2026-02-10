const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
 ping: () => ipcRenderer.invoke('ping'),
 addReserva: (reserva) => ipcRenderer.invoke('add-reserva', reserva),
 getReservas: () => ipcRenderer.invoke('get-reservas'),
 delReserva: (id) => ipcRenderer.invoke('del-reserva', id),
 editReserva: (reserva) => ipcRenderer.invoke('edit-reserva', reserva),
 ventaReserva: (reserva) => ipcRenderer.invoke('venta-reserva', reserva),
 getArchivos: () => ipcRenderer.invoke('get-archivos')
})