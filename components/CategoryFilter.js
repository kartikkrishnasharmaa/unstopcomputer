// components/CategoryFilter.js
import { motion } from 'framer-motion';

const categories = ['All', 'Digital Marketing', 'Artificial Intelligence', 'Data Science', 'Web Development', 'Mobile Development', 'Cybersecurity', 'Cloud Computing', 'Blockchain', 'DevOps'];

export default function CategoryFilter({ setCategory, selectedCategory }) {
  return (
    <div className="mb-10 p-4 rounded-xl bg-white shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Filter by Category</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium border 
              ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
