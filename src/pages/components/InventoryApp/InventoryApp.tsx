import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryItem from '../InventoryItem/InventoryItem.tsx';

const InventoryApp = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/inventory')
      .then(response => setInventory(response.data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  const addItem = () => {
    axios.post('http://localhost:5000/inventory', newItem)
      .then(response => {
        setInventory([...inventory, response.data]);
        setNewItem({ name: '', quantity: '' });
      })
      .catch(error => console.error('Error adding item:', error));
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/inventory/${id}`)
      .then(() => setInventory(inventory.filter(item => item.id !== id)))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={e => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={e => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        {inventory.map(item => (
          <InventoryItem key={item.id} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default InventoryApp;
