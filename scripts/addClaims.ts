import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

const adminEmails = process.env.FIREBASE_ADMIN_EMAILS?.split(',') || [];

async function addClaims() {
  for (const email of adminEmails) {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
  }
}

addClaims().then(process.exit());
