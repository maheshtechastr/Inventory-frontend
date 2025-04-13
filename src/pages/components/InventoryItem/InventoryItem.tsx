import React from 'react';

const InventoryItem = ({ item, onDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
      <span>
        <strong>{item.name}</strong> - Quantity: {item.quantity}
      </span>
      <button onClick={() => onDelete(item.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>
        Delete
      </button>
    </div>
  );
};

export default InventoryItem;
