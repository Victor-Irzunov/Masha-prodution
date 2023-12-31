import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(process.cwd(), 'public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + '.webp');
  },
});

const upload = multer({ storage });

export async function POST(req) {
  try {
    const error = await new Promise((resolve, reject) => {
      upload.any()(req, {}, (err) => {
        if (err) {
          console.error('Ошибка при загрузке файла:', err);
          reject(err);
        }
        resolve();
      });
    });

    if (error) {
      return new NextResponse("Ошибка при загрузке файла", { status: 500 });
    }

    try {
      const formData = await req.formData();
      const view = parseInt(formData.get('view'), 10);
      const like = parseInt(formData.get('like'), 10);
      const article = formData.get('article');
      const publication = formData.get('publication') === 'true';
      const dateTime = formData.get('dateTime');
      const link = formData.get('link');
      const group = formData.get('group');
      const description = formData.get('description');

      const imgFiles = formData.getAll('img');
      const fileName = [];

      for (const imgFile of imgFiles) {
        const name = uuidv4() + '.webp';
        fileName.push({ image: name });
        const filePath = path.resolve(process.cwd(), 'public/uploads', name);
        const data = await imgFile.arrayBuffer();
        await fs.promises.writeFile(filePath, Buffer.from(data));
      }

      const data = await prisma.articles.create({
        data: {
          view,
          link,
          article,
          like,
          group,
          description,
          publication,
          dateTime,
          img: JSON.stringify(fileName),
        },
      });

      if (data) {
        return NextResponse.json({ message: 'Статья добавлена' });
      }
    } catch (error) {
      console.error("🚀 POST Ошибка:", error);
      return new NextResponse("Ошибка при создании статьи", { status: 500 });
    }
  } catch (error) {
    console.error('Error saving data:', error);
    return new NextResponse("Ошибка на сервере", { status: 500 });
  }
}


export async function PUT(req) {
  try {
    const error = await new Promise((resolve, reject) => {
      upload.any()(req, {}, (err) => {
        if (err) {
          console.error('Ошибка при загрузке файла:', err);
          reject(err);
        }
        resolve();
      });
    });
    if (error) {
      return new NextResponse("Ошибка при загрузке файла", { status: 500 });
    }

    try {
      const formData = await req.formData();
      const view = parseInt(formData.get('view'), 10);
      const like = parseInt(formData.get('like'), 10);
      const article = formData.get('article');
      const publication = formData.get('publication') === 'true';
      const dateTime = formData.get('dateTime');
      const link = formData.get('link');
      const group = formData.get('group');
      const id = formData.get('id');
      const description = formData.get('description');

      const imgFiles = formData.getAll('img');
      let data;

      if (imgFiles && imgFiles.length > 0) {
        const fileName = [];
        for (const imgFile of imgFiles) {
          const name = uuidv4() + '.webp';
          fileName.push({ image: name });
          const filePath = path.resolve(process.cwd(), 'public/uploads', name);
          const data = await imgFile.arrayBuffer();
          await fs.promises.writeFile(filePath, Buffer.from(data));
        }

        data = await prisma.articles.update({
          where: {
            id: +id,
          },
          data: {
            view,
            link,
            article,
            like,
            group,
            description,
            publication,
            dateTime,
            img: JSON.stringify(fileName),
          },
        });
      } else {
        // Если изображение не пришло, не обновляем поле с изображением
        data = await prisma.articles.update({
          where: {
            id: +id,
          },
          data: {
            view,
            link,
            article,
            like,
            group,
            description,
            publication,
            dateTime,
          },
        });
      }

      if (data) {
        return NextResponse.json({ message: 'Статья изменена' });
      }
    } catch (error) {
      console.error("🚀 POST Ошибка:", error);
      return new NextResponse("Ошибка при изменении статьи", { status: 500 });
    }
  } catch (error) {
    console.error('Error saving data:', error);
    return new NextResponse("Ошибка на сервере", { status: 500 });
  }
}


// export async function PUT(req) {
//   try {
//     const error = await new Promise((resolve, reject) => {
//       upload.any()(req, {}, (err) => {
//         if (err) {
//           console.error('Ошибка при загрузке файла:', err);
//           reject(err);
//         }
//         resolve();
//       });
//     });
//     if (error) {
//       return new NextResponse("Ошибка при загрузке файла", { status: 500 });
//     }
//     try {
//       const formData = await req.formData();
//       const view = parseInt(formData.get('view'), 10);
//       const like = parseInt(formData.get('like'), 10);
//       const article = formData.get('article');
//       const publication = formData.get('publication') === 'true';
//       const dateTime = formData.get('dateTime');
//       const link = formData.get('link');
//       const group = formData.get('group');
//       const id = formData.get('id');
//       const description = formData.get('description');
//       const imgFiles = formData.getAll('img');
//       const fileName = [];
//       let data
//       if (imgFiles) {
//         for (const imgFile of imgFiles) {
//           const name = uuidv4() + '.webp';
//           fileName.push({ image: name });
//           const filePath = path.resolve(process.cwd(), 'public/uploads', name);
//           const data = await imgFile.arrayBuffer();
//           await fs.promises.writeFile(filePath, Buffer.from(data));
//         }

//      data = await prisma.articles.update({
//         where: {
//           id: +id,
//         },
//         data: {
//           view,
//           link,
//           article,
//           like,
//           group,
//           description,
//           publication,
//           dateTime,
//           img: JSON.stringify(fileName),
//         },
//       });
//       } else {
//         data = await prisma.articles.update({
//           where: {
//             id: +id,
//           },
//           data: {
//             view,
//             link,
//             article,
//             like,
//             group,
//             description,
//             publication,
//             dateTime,
//           },
//         });
//       }
//       if (data) {
//         return NextResponse.json({ message: 'Статья изменена' });
//       }
//     } catch (error) {
//       console.error("🚀 POST Ошибка:", error);
//       return new NextResponse("Ошибка при изменении статьи", { status: 500 });
//     }
//   } catch (error) {
//     console.error('Error saving data:', error);
//     return new NextResponse("Ошибка на сервере", { status: 500 });
//   }
// }
