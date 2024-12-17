import React, { useState } from 'react';
import { InputField } from '../components/forms/InputField';
import { DeleteSection } from '../components/forms/DeleteSection';

export const ClipManagementPage: React.FC = () => {
  const [form, setForm] = useState({
    clipNumber: '',
    attributeCount: '',
    date: ''
  });

  const handleAdd = () => {
    console.log('Adding new clip:', form);
    // Implement add functionality
  };

  const handleDelete = (number: string) => {
    console.log('Deleting clip:', number);
    // Implement delete functionality
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-xl font-semibold mb-6">add new clip</h1>
        
        <div className="space-y-4">
          <InputField
            label="clip number"
            value={form.clipNumber}
            onChange={(value) => setForm({ ...form, clipNumber: value })}
            placeholder="0006"
          />
          
          <InputField
            label="attribute count"
            value={form.attributeCount}
            onChange={(value) => setForm({ ...form, attributeCount: value })}
            type="number"
            placeholder="6789"
          />

          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-2">for</p>
            <InputField
              label="date"
              value={form.date}
              onChange={(value) => setForm({ ...form, date: value })}
              type="date"
            />
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors mt-4"
          >
            add
          </button>
        </div>

        <DeleteSection onDelete={handleDelete} />
      </div>
    </div>
  );
};