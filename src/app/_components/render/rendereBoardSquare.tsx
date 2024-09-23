import { getEntryBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/styles/markdown-styles.module.css";

const rendereBoardSquare = async (name: string) => {
    const eboard = await getEntryBySlug("eboard", name);
    if (!eboard) {
        return notFound();
      }

    const content = await markdownToHtml(eboard.content || "");
    
    return( 
        <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-gray-600 text-sm mb-4 border-b pb-2">
          <span>
            Last Updated: {new Date(eboard.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{eboard.title}</h1>
          <p className="text-gray-700 mb-6">{eboard.description}</p>
          <img src={eboard.coverImage} alt={eboard.description} className="w-64 h-auto rounded-lg mb-6 shadow-md"/>
          <div className={`${markdownStyles.markdown} prose max-w-none`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </section>
    );
};

export default rendereBoardSquare;