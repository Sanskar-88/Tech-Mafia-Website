import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Thank you for subscribing to our newsletter.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-white text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-white text-primary hover:bg-gray-100 disabled:opacity-70"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
          <p className="text-white/80 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm; 