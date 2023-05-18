import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useFruitStore from "../../hooks/fruitStore";
import { useEffect } from "react";

export default function StatePages() {
  const { data, isLoading, fetchData, clearData } = useFruitStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (item) => {
    setExpandedItem((prevItem) => (prevItem === item ? null : item));
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Fruit List</h1>

        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={fetchData}
          >
            Fetch Data
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={clearData}
          >
            Clear Data
          </button>
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="animate-pulse text-2xl font-bold">Loading...</div>
          </div>
        ) : (
          <TransitionGroup component="ul" className="pl-6">
            {data.map((fruit, index) => (
              <CSSTransition key={index} timeout={300} classNames="fade">
                <li
                  className="mb-2 bg-yellow-200 py-2 px-4 rounded shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300"
                  onClick={() => handleItemClick(fruit)}
                >
                  <span className="font-bold">{fruit.name}</span>
                  <span className="bg-green-500 text-white py-1 px-2 rounded ml-2">
                    {fruit.category}
                  </span>
                  {expandedItem === fruit && (
                    <div className="mt-2">
                      <p className="text-gray-600">Price: {fruit.price}</p>
                      <p className="text-gray-600">
                        Stocked: {fruit.stocked ? "Yes" : "No"}
                      </p>
                    </div>
                  )}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
}
