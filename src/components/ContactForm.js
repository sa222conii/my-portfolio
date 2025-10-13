'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css'; // あとで作成するCSSモジュール

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
  const [status, setStatus] = useState(''); // 送信ステータス

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('送信中...');

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            setStatus('メッセージが正常に送信されました！');
        // フォームをリセット
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus(`送信に失敗しました: ${result.message}`);
        }
        } catch (error) {
        console.error('Form submission error:', error);
        setStatus('エラーが発生しました。もう一度お試しください。');
    }
};

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
            <label htmlFor="name">お名前</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">メールアドレス</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
        />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="message">メッセージ</label>
            <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
        </div>
        <button type="submit" className={styles.button}>送信</button>
        {status && <p className={styles.status}>{status}</p>}
    </form>
    );
}