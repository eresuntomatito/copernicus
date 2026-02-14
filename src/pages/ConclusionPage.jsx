import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Telescope, Lightbulb } from 'lucide-react';
import { conclusionContent } from '../data/conclusionContent';

const ConclusionPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-success/10 to-primary/10">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          {conclusionContent.title}
        </h1>
        <p className="text-lg text-gray-600">
          Synthesizing findings and charting the path forward
        </p>
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-accent" />
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conclusionContent.keyTakeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">{takeaway.title}</h3>
              <p className="text-sm text-gray-700">{takeaway.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-success/10">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {conclusionContent.summary.title}
          </h2>
        </div>
        <div className="space-y-4">
          {conclusionContent.summary.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Limitations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card mb-8 bg-amber-50/50"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-100">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {conclusionContent.limitations.title}
          </h2>
        </div>
        <div className="space-y-4">
          {conclusionContent.limitations.items.map((limitation, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-700 mb-2">
                {limitation.category}
              </h3>
              <p className="text-gray-700 text-sm">
                {limitation.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Future Research Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card bg-gradient-to-br from-secondary/10 to-accent/10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-secondary/20">
            <Telescope className="w-6 h-6 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {conclusionContent.futureResearch.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {conclusionContent.futureResearch.directions.map((direction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-5 rounded-lg shadow-sm"
            >
              <h3 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                {direction.category}
              </h3>
              <ul className="space-y-2">
                {direction.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-accent mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl"
      >
        <p className="text-xl italic text-gray-700 mb-4">
          "Can AI serve as a co-founder in modern entrepreneurship?"
        </p>
        <p className="text-gray-600">
          The metaphor, while compelling in media and startup rhetoric, 
          <span className="font-bold text-primary"> remains aspirational rather than operational</span>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ConclusionPage;
