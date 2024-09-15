import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Entry from "@/app/types/entry";

// DEF: STRING -> Promise<ENTRY[]>
// Returns an sequence of entries for a specified table
export async function getAllEntries(tableName: string): Promise<Entry[]> {
  // DB Path
  const dir = path.join('_db', tableName);
  try {
    // Retrieve all markdown file names for the specified table
    const directoryContents = await fs.promises.readdir(dir); 
    // Initialize a sequence of entries
    const entries: Entry[] = [];
    // Iterate through directory contents
    for (const fileName of directoryContents) {
      // Generate the full path
      const fullPath = path.join(dir, `${fileName}`);
      try {
        // Read file specified by fullPath, return the contents of the file
        const fileContents = await fs.promises.readFile(fullPath, "utf8");
        // Decompose contents
        const { data, content } = matter(fileContents);
        const slug = fileName.replace(/\.md$/, "")
        const e: Entry = {
          slug: slug,
          title: data.title,
          date: data.date,
          location: data.location,
          description: data.description,
          coverImage: data.coverImage,
          content: content
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


// DEF: STRING STRING -> Promise<Event | null>
// Returns a specific entry provided a table name and a slug from the url
export async function getEntryBySlug(tableName: string, slug: string): Promise<Event | null> {
  const dir = path.join('_db', tableName);
  const fullPath = path.join(dir, `${slug}.md`);
  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const entry: Entry = {
      slug: slug,
      title: data.title,
      date: data.date,
      location: data.location,
      description: data.description,
      coverImage: data.coverImage,
      content: content
    };
    return entry;
  } catch (error) {
    console.error(`Failed to load entry at ${fullPath}`, error);
    return null; 
  }
}
