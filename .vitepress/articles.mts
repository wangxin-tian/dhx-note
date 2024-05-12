
// 使用fs 读取 ../src/articles 目录下的所有markdown文章，并获取frontmatter中的title字段，然后将所有文章的标题和链接输出到控制台。

import * as fs from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(__dirname, '..', 'src', 'articles');

const files = await fs.readdir(articlesDirectory);

const articles: ({ title?: string, data?: any, link: string } & any)[] = files.map((filename) => {
  const filePath = path.join(articlesDirectory, filename);
  const { data: frontmatter } = matter.read(filePath);
  return { ...frontmatter, link: `/src/articles/${filename.replace('.md', '')}.html` };
})

export default articles;