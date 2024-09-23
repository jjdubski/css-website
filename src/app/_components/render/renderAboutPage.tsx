import { getEntryBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/styles/markdown-styles.module.css";

const renderAboutPage = async () => {
    const about = await getEntryBySlug("about", "about");
    if (!about) {
        return notFound();
      }

    const content = await markdownToHtml(about.content || "");
    
    return( 
        <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{about.title}</h1>
        <div className="text-gray-600 text-sm mb-2">
          <span>Last Updated: {new Date(about.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div
          className={`${markdownStyles["markdown"]} mt-4 text-gray-700`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    );
};

export default renderAboutPage;