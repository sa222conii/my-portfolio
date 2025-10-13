import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  // App Routerではリクエストメソッドのチェックは不要な場合が多いですが、念のため残します。
  //   if (req.method !== 'POST') {
  //     return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  //   }

  try {
    const { name, email, message } = await req.json();

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'すべてのフィールドを入力してください' }, { status: 400 });
    }

    // Nodemailerのトランスポーターオブジェクトを作成
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER, // 環境変数から取得
        pass: process.env.EMAIL_SERVER_PASSWORD, // 環境変数から取得
      },
    });

    // メールの内容
    const mailOptions = {
      from: `"${name}" <${email}>`, // 送信元
      to: process.env.EMAIL_TO, // 送信先
      subject: 'sa22ポートフォリオサイトからのお問い合わせ',
      text: `名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`,
      html: `
        <h3>sa222ポートフォリオサイトからのお問い合わせ</h3>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // メールを送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'メッセージが正常に送信されました。' }, { status: 200 });

  } catch (error) {
    console.error('Mail sending error:', error);
    return NextResponse.json({ success: false, message: 'サーバーエラーが発生しました。' }, { status: 500 });
  }
}
