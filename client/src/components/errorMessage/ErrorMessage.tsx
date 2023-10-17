import React from 'react';
import './errorMessage.css';

interface ErrorMessagesProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessagesProps> = ({ message }) => {
  return (
    <div className="error">
      <span>⛔</span> {message}
    </div>
  );
};

export default ErrorMessage;
