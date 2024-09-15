import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the structure of your Event type
type Entry = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  content: string;
  coverImage: string;
};

export async function getAllSlugs(tableName: string): Promise<Entry | null> {
  const dir = path.join('_db', tableName);
  try {
    
  } catch (error) {
    console.error(`Failed to load all entries at ${fullPath}`, error);
    return null; 
  }
}

export async function getAllEntries(tableName: string): Promise<Entry[]> {
  const dir = path.join('_db', tableName);

  try {
    const contents = await fs.promises.readdir(dir);
    const slugs = contents.map(file => file.replace(/\.md$/, ""));
    const entries: Entry[] = [];
    for (const slug of slugs) {
      const fullPath = path.join(dir, `${slug}.md`);

      try {
        const fileContents = await fs.promises.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const e: Entry = {
          slug,
          title: data.title || "",
          date: data.date || "",
          location: data.location || "",
          description: data.description || "",
          coverImage: data.coverImage || "",
          content
        };

        entries.push(e);
      } catch (innerError) {
        console.error(`Failed to read file at ${fullPath}`, innerError);
      }
    }

    return entries;
  } catch (error) {
    console.error(`Failed to load entries from directory ${dir}`, error);
    return [];
  }
}


export async function getEntryBySlug(tableName: string, slug: string): Promise<Event | null> {
  const dir = path.join('_db', tableName);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(dir, `${realSlug}.md`);

  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    const event: Event = {
      slug: realSlug,
      title: data.title || "",
      date: data.date || "",
      location: data.location || "",
      description: data.description || "",
      content
    };
    
    return event;
  } catch (error) {
    console.error(`Failed to load entry at ${fullPath}`, error);
    return null; 
  }
}
