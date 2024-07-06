import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AINamedMyPet = () => {
  const [petType, setPetType] = useState('Dog');
  const [appearance, setAppearance] = useState('');
  const [personality, setPersonality] = useState('Playful');
  const [mediaInspiration, setMediaInspiration] = useState('');
  const [nameOrigin, setNameOrigin] = useState('No preference');
  const [generatedNames, setGeneratedNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里我们会模拟AI生成名字的过程
    const mockNames = [
      { name: 'Buddy', explanation: 'A friendly name for a playful dog.' },
      { name: 'Luna', explanation: 'Inspired by the moon, perfect for a mysterious pet.' },
      { name: 'Orion', explanation: 'A strong name from Greek mythology, suitable for an energetic pet.' },
    ];
    setGeneratedNames(mockNames);
  };

  return (
    <div className="min-h-screen bg-purple-700 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">AI Named My Pet ✨</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <p className="text-gray-600 mb-6">
          Get whisked away by AI Named My Pet, the ingenious AI wizard that bestows
          tailor-made, endearing names reflecting your pet's extraordinary essence.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What type of pet are you naming?
            </label>
            <div className="relative">
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe your pet's appearance or any distinctive features? (optional)
            </label>
            <textarea
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="3"
              placeholder="e.g. Big and fluffy!"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What is your pet's main personality or temperament?
            </label>
            <div className="relative">
              <select
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Playful</option>
                <option>Calm</option>
                <option>Energetic</option>
                <option>Shy</option>
                <option>Friendly</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Any favorite tv shows, movies, books, or other media that you would like to draw inspiration from?
            </label>
            <textarea
              value={mediaInspiration}
              onChange={(e) => setMediaInspiration(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="3"
              placeholder="e.g. Game of Thrones, Harry Potter,"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Do you have a preferred name origin?
            </label>
            <div className="relative">
              <select
                value={nameOrigin}
                onChange={(e) => setNameOrigin(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>No preference</option>
                <option>English</option>
                <option>Latin</option>
                <option>Greek</option>
                <option>Japanese</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            GENERATE NAMES
          </button>
        </form>

        {generatedNames.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Generated Pet Names:</h2>
            <ul className="space-y-4">
              {generatedNames.map((name, index) => (
                <li key={index}>
                  <p className="text-xl font-semibold">{name.name}</p>
                  <p className="text-gray-600">{name.explanation}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AINamedMyPet;
