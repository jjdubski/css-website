import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { getEntryBySlug } from "@/lib/api";
import markdownStyles from "@/app/styles/markdown-styles.module.css";
import Params from "@/app/types/params";
import Link from 'next/link';

export default async function Projects({ params }: Params) {
  const project = await getEntryBySlug("projects", params.slug);
  if (!project) {
    return notFound();
  }
  const content = await markdownToHtml(project.content || "");
  
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="mb-6">
        <Link href="/projects" className="text-blue-500 hover:underline">
        ← Back to Projects
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
      <div className="text-gray-600 text-sm mb-2">
        <span>{new Date(project.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span className="mx-2">•</span>
        <span>{project.location}</span>
      </div>
      <div
        className={`${markdownStyles["markdown"]} mt-4 text-gray-700`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}