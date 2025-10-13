// クライアントコンポーネントにする必要がなければ、この行は不要です。
// 通常、シンプルな表示のみであればサーバーコンポーネントで十分です。
// 'use client'; 

import React from 'react';

// Next.jsのページコンポーネントは、デフォルト export（export default）が必要です。
const WelcomePage = () => {
  return (
    // Tailwind CSSのクラスを使用して中央に配置し、テキストを大きく表示
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-6xl font-extrabold text-blue-600">
        Welcome
      </h1>
      <p className="mt-4 text-xl text-gray-700">
        Next.js, Tailwind CSS, and TypeScript project is back online!
      </p>
    </div>
  );
};

// ここが最も重要です！関数がコンポーネントとしてデフォルトエクスポートされていること。
export default WelcomePage;