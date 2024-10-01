import { getEntryBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/styles/markdown-styles.module.css";

const rendereBoardSquare = async (name: string) => {
    const eboard = await getEntryBySlug("eboard", name);
    if (!eboard) {
        return notFound();
    }

    const content = await markdownToHtml();

    return (
        <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img 
                src={eboard.coverImage} 
                alt={eboard.description} 
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{eboard.title}</h2>

                <p className="text-sm font-medium text-gray-500 mb-4">{eboard.content || "Board Member"}</p>

                <div className="text-gray-400 text-xs mb-4">
                    Last Updated: {new Date(eboard.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <p className="text-gray-700 pb-2">
                    {eboard.description}
                </p>
            </div>
        </div>
    );
};

export default rendereBoardSquare;
