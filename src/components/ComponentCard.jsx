import React from 'react';

export const ComponentCard = ({ imgCharacter, nameCharacter, quoteCharacter }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imgCharacter} alt={nameCharacter} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nameCharacter}</div>
        <p className="text-gray-700 text-base">{quoteCharacter}</p>
      </div>
    </div>
  );
};

