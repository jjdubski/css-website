import { getEntryBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/styles/markdown-styles.module.css";

const rendereBoardPage = async () => {
    const eboard = await getEntryBySlug("eboard", "eboard");
    if (!eboard) {
        return notFound();
      }

    const content = await markdownToHtml(eboard.content || "");
    
    return( 
        <section className="max-w-4xl mx-auto">
        <div className="text-gray-600 text-sm mb-2">
          <span>Last Updated: {new Date(eboard.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div
          className={`${markdownStyles["markdown"]} mt-4 text-gray-700`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    );
};

export default rendereBoardPage;