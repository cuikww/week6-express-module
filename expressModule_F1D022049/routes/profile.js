// File: routes/profile.js

import { Router } from 'express';

const router = Router();

// Data profil (array JSON) - Anda bisa mengganti data ini dengan data Anda
const profiles = [
  {
    nim: "F1D022300",
    nama: "A. H.",
    prodi: "Teknik Informatika",
    angkatan: 2022
  },
  {
    nim: "F1D022049",
    nama: "I Nengah Dwi Putra Witarsana",
    prodi: "Teknik Informatika",
    angkatan: 2022
  },
  {
    nim: "F1D022301",
    nama: "Tom Cruise",
    prodi: "Teknik Kimia",
    angkatan: 2022
  }
];

router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:nim', (req, res) => {
  const { nim } = req.params;
  const profile = profiles.find(p => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send('Profil tidak ditemukan');
  }
});

export default router;