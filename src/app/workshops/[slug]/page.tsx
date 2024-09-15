import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { getEntryBySlug } from "@/lib/api";
import markdownStyles from "@/app/styles/markdown-styles.module.css";
import Params from "@/app/types/params"

export default async function Workshops({ params }: Params) {
  const event = await getEntryBySlug("workshops", params.slug);
  if (!event) {
    return notFound();
  }
  const content = await markdownToHtml(event.content || "");
  return (
    <section className="flex flex-row md:items-start">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
