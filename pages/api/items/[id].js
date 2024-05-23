// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { promises as fs } from 'fs';


export default async function handler(req, res) {

    const file= await fs.readFile(process.cwd() + '/public/db.json', 'utf8')

    const data = JSON.parse(file);

    const record=data.items.find(record=> record.id === Number(req.query.id))

    res.status(200).json({ data: record })
  }
  