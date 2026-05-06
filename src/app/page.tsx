'use client';

import React, { useState } from 'react';
import { Briefcase, User } from 'lucide-react'; // アイコンライブラリ
import ContactModal from '../components/ContactModal';


// ポートフォリオのダミーデータ
const projects = [
  {
    id: 1,
    title: "行政書士事務所サイト (Web App)",
    description: "建設業許可申請を専門とする行政書士事務所のWebサイト。元現場監督の代表の強みを訴求するランディングページとして設計し、無料相談への導線・フルリモート対応・LINE連携UIのモックアップを含む構成で制作しました。",
    tags: ["Next.js", "Vercel", "Responsive", "Design"],
    link: "https://gyousei-selector.vercel.app/",
    image: "",
  },
  {
    id: 2,
    title: "予約システム (Web App)",
    description: "Vercelにデプロイされた予約システム。Googleログイン・Stripe決済・Slack通知を組み合わせたフルスタック構成で、実務レベルの外部API連携を実装しました。",
    tags: ["Next.js", "Vercel", "Google Auth", "Stripe", "Slack"],
    link: "https://reservation-system-pink-eta.vercel.app/",
    image: "",
  },
  {
    id: 3,
    title: "SEO対策ツール (Web App)",
    description: "OpenAI APIを活用し、URLを入力するだけでSEO課題とその改善提案を自動生成するWebアプリ。Google認証・分析履歴管理を実装し、継続的なSEO改善をサポートします。",
    tags: ["Next.js", "OpenAI API", "Google Auth", "Database"],
    link: "https://seo-ai-checker.vercel.app/",
    image: "",
  },
  {
    id: 4,
    title: "美容クリニック LP",
    description: "30〜40代女性をターゲットにした美容クリニックのLP。高級感・清潔感を両立するカラー・フォント選定にこだわり、ファーストビューからCTAへの視線誘導を意識したセクション構成で制作しました。",
    tags: ["HTML5", "CSS", "Design", "Responsive"],
    link: "/works/beauty-clinic/index.html",
    image: "",
  },
  {
    id: 5,
    title: "SNSマーケティング LP",
    description: "SNSマーケティング企業のサービス紹介LP。CSSアニメーションとJavaScriptを活用したスクロール連動エフェクトで視覚的インパクトを演出し、クリエイティブ企業らしいダイナミックな世界観を表現しました。",
    tags: ["HTML5", "CSS", "JavaScript", "Animation"],
    link: "/works/funny-sns/index.html",
    image: "",
  },
  {
    id: 6,
    title: "セミナー資料作成 (スライド)",
    description: "SEO・Webマーケティングをテーマにしたセミナー用スライド資料。情報の優先度に基づいたレイアウト設計と、視認性を高めるビジュアル表現にこだわり、「伝わる」資料を作成しました。",
    tags: ["PowerPoint", "Design", "Presentation", "PDF"],
    link: "/works/suit.pdf",
    image: "",
  },
];



const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* 1. ヘッダー (ナビゲーション) */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-indigo-600">sa222</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">自己紹介</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600">実績</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">連絡先</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-8">

        {/* 2. 自己紹介セクション */}
        <section id="about" className="my-12 p-8 bg-white rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 pb-1">自己紹介</h2>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            「ビジネスの成果につながるWebサイト作り」をモットーに、デザインから実装（コーディング・WordPress化）、そしてWebアプリケーション開発まで幅広く手がけています。<br /><br />
            これまではシステム開発を中心に活動してきましたが、現在はその技術力を活かし、デザイン性と機能性を兼ね備えたWebサイト制作に注力しています。
            単に作るだけでなく、SEO対策や運用更新のしやすさ（CMS構築）まで考慮した、長く使えるサイトを提供します。<br /><br />
            もちろん、Python等を用いた業務効率化ツールの開発や、API連携を含んだ高度なWebシステムの構築も引き続き対応可能です。
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">スキルセット</h3>

            {/* フロントエンド */}
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2 text-gray-700 flex items-center">
                フロントエンド (Frontend)
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-blue-100 text-blue-800">React/Next.js</span>
                <span className="skill-tag bg-blue-100 text-blue-800">TypeScript</span>
                <span className="skill-tag bg-blue-100 text-blue-800">Tailwind CSS</span>
                <span className="skill-tag bg-blue-100 text-blue-800">Bootstrap CSS</span>
                <span className="skill-tag bg-blue-100 text-blue-800">JavaScript (ES6+)</span>
                <span className="skill-tag bg-blue-100 text-blue-800">HTML5/CSS3</span>
              </div>
            </div>

            {/* バックエンド */}
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2 text-gray-700 flex items-center">
                バックエンド & サーバー (Backend & Server)
              </h4>
              <div className="flex flex-wrap gap-2">
                {/* 獲得されたスキルを並列で全て表示 */}
                <span className="skill-tag bg-green-100 text-green-800">Node.js</span>
                <span className="skill-tag bg-green-100 text-green-800">Express.js (Node.js)</span>
                <span className="skill-tag bg-green-100 text-green-800">Python (Flask)</span> {/* Flaskの実績があれば含めます */}
              </div>
            </div>

            {/* デスクトップアプリ */}
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2 text-gray-700 flex items-center">
                デスクトップアプリ (Desktop App)
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-purple-100 text-purple-800">Python (tkinter)</span>
                <span className="skill-tag bg-purple-100 text-purple-800"> 帳票作成(openpyxl,xlwings,pandas)</span>
                <span className="skill-tag bg-purple-100 text-purple-800"> 自動処理(pyautogui)</span>
              </div>
            </div>

            {/* データベース・インフラ */}
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2 text-gray-700 flex items-center">
                データベース & その他 (DB & Others)
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-orange-100 text-purple-800">SQLite</span>
                <span className="skill-tag bg-orange-100 text-purple-800">Git/GitHub</span>
              </div>
            </div>
          </div>
        </section>
        {/* 3. プロジェクト一覧セクション */}
        <section id="projects" className="my-12">
          <div className="flex items-center space-x-4 mb-8">
            <Briefcase className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 pb-1">実績 (Projects)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                {project.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-indigo-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 flex items-center"
                >
                  プロジェクトを見る →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 連絡先セクション　 */}
        {/*<section id="contact" className="my-12 p-8 bg-white rounded-xl shadow-lg">
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <Mail className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 pb-1">お問い合わせ</h2>
          </div>
          <p className="text-lg text-center mb-8">
            お気軽にご連絡ください。
          </p>
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              お問い合わせフォームを開く
            </button>
          </div>
        </section>*/}
      </main>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PortfolioPage;
