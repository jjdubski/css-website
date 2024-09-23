import Entry from "@/app/types/entry";
import Link from 'next/link';

const renderProjectPreview = (p: Entry) => {
    return (
        <Link href={`/projects/${p.slug}`} className="block bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden shadow-md">
            {p.coverImage && (
                <div className="relative pb-56 overflow-hidden">
                    <img 
                        src={p.coverImage} 
                        alt={`${p.title} cover image`} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <div className="text-gray-500">{p.location}</div>
            </div>
        </Link>
    );
};

export default renderProjectPreview;