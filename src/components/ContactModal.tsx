'use client';

import React from 'react';
import ContactForm from './ContactForm';
import styles from './ContactModal.module.css';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={24} />
        </button>
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">お問い合わせ</h2>
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
