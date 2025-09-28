import express from 'express';
import { kali, kurang, pangkat, tambah } from './utils/math.js';
import profileRouter from './routes/profile.js';

const app = express();
const port = 3000;

const NAMA = "I Nengah Dwi Putra Witarsana";
const NIM = "F1D022049";

app.get('/', (req, res) => {
  res.send(`NIM: ${NIM} dan Nama: ${NAMA}`);
});

app.get('/hitung', (req, res) => {
  const hasil = tambah(4, 9);
  const hasil2 = kali(4,9)
  const hasil3 = kurang(4,9)
  const hasil4 = pangkat(4,9)
  res.send(`Hasil penjumlahan 4 + 9 adalah ${hasil} \n
    Hasil kali 4 * 9 adalah ${hasil2} \n
    Hasil pengurangan 4 - 9 adalah ${hasil3} \n
    Hasil perpangkatan 4 pangkat 9 adalah ${hasil4}`);
});

app.use('/profile', profileRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});