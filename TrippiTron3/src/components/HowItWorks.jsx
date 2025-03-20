import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Tell Us Your Preferences',
    description: 'Share your travel interests, preferred destinations, and budget.',
    icon: '📝'
  },
  {
    title: 'Get AI Recommendations',
    description: 'Receive personalized travel suggestions using AI-powered insights.',
    icon: '🤖'
  },
  {
    title: 'Book & Explore',
    description: 'Confirm your plans and enjoy your seamless travel experience.',
    icon: '✈️'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">How It Works?</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="text-center max-w-xs"
          >
            <div className="text-6xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}